import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Card, CardContent, CardMedia, Typography, Rating, TextField, Button } from '@mui/material';
import { addComment, addRating } from '../redux/slices/authSlice';
import { Movie, Commenttype } from '../utils/types';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) =>
    state.movies.movies.find((movie: Movie) => movie.imdbID === id)
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const [comment, setComment] = useState('');

  if (!movie) {
    return <Typography variant="h5">Movie not found</Typography>;
  }

  const handleCommentSubmit = () => {
    if (user && comment.trim()) {
      dispatch(addComment({ movieId: movie.imdbID, comment }));
      setComment('');
    }
  };

  const handleRatingChange = (newRating: number) => {
    if (user) {
      dispatch(addRating({ movieId: movie.imdbID, rating: newRating }));
    }
  };

  return (
    <Box display="flex" justifyContent="center" padding={2}>
      <Card className="movie-card">
        <CardMedia
          component="img"
          alt={movie.Title}
          image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
          className="poster-container"
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h6">{movie.Title}</Typography>
          <Typography variant="body2" color="textSecondary">{movie.Plot}</Typography>
          <Typography variant="body2" color="textSecondary">Director: {movie.Director}</Typography>
          <Typography variant="body2" color="textSecondary">Actors: {movie.Actors}</Typography>
          <Typography variant="body2" color="textSecondary">Genre: {movie.Genre}</Typography>
          <Typography variant="body2" color="textSecondary">Released: {movie.Released}</Typography>
          <Typography variant="body2" color="textSecondary">Runtime: {movie.Runtime}</Typography>
          <Typography variant="body2" color="textSecondary">Rating: {movie.imdbRating}</Typography>

          {user && (
            <Box marginTop={2}>
              <Rating
                value={user.ratings[movie.imdbID] || 0}
                onChange={(event, newValue) =>{console.log(event);  handleRatingChange(newValue || 0)}}
              />
              <Box display="flex" flexDirection="column" marginTop={2}>
                <TextField
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <Button
                  onClick={handleCommentSubmit}
                  variant="contained"
                  color="primary"
                  disabled={!comment.trim()}
                  style={{ marginTop: '10px' }}
                >
                  Submit
                </Button>
              </Box>
              {movie.imdbID in user.comments && user.comments[movie.imdbID].map((c: Commenttype, index: number) => (
                <Box key={index} marginTop={2} padding={2} border={1} borderRadius={4} borderColor="grey.300">
                  <Typography variant="body1">{c.text}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieDetails;