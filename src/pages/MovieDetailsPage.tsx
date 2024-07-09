import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

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

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = useSelector((state: RootState) =>
    state.movies.movies.find((movie: Movie) => movie.imdbID === id)
  );

  if (!movie) {
    return <Typography variant="h5">Movie not found</Typography>;
  }

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
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieDetails;
