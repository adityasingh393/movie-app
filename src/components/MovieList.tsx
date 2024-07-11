import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite, addRating } from '../redux/slices/authSlice';
import { Card, CardContent, CardMedia, Typography, IconButton, Grid, Box, Rating } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import Comment from './Comment';

interface MovieListProps {
  movies: Movie[];
  searchTerm: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Plot?: string;
  Director: string;
  Actors: string;
  Released: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, searchTerm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleFavoriteToggle = (imdbID: string) => {
    if (user) {
      if (user.favorites.includes(imdbID)) {
        dispatch(removeFavorite(imdbID));
      } else {
        dispatch(addFavorite(imdbID));
      }
    }
  };

  const handlePosterClick = (imdbID: string) => {
    navigate(`/movie-details/${imdbID}`);
  };

  const handleRatingChange = (imdbID: string, rating: number) => {
    if (user) {
      dispatch(addRating({ movieId: imdbID, rating }));
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid container spacing={3} justifyContent="center">
      {filteredMovies.map(movie => (
        <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={3}>
          <Card className="movie-card">
            <CardMedia
              component="img"
              alt={movie.Title}
              image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
              className="poster-container"
              style={{ objectFit: 'contain', cursor: 'pointer' }}
              onClick={() => handlePosterClick(movie.imdbID)}
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
              
            </CardContent>
            {user && (
              <Box display="flex" alignItems="center" justifyContent="space-between" padding="8px">
                <IconButton
                  aria-label="toggle favorite"
                  onClick={() => handleFavoriteToggle(movie.imdbID)}
                  className="favorite-button"
                >
                  <ThumbUpIcon color={user.favorites.includes(movie.imdbID) ? 'primary' : 'action'} />
                </IconButton>
                
              </Box>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
