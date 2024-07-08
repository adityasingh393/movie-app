import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MovieList from '../components/MovieList';

const FavoritePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const movies = useSelector((state: RootState) => state.movies.movies);

  if (!user) {
    return <p>Please log in to view your favorite movies.</p>;
  }

  const favoriteMovies = movies.filter(movie => user.favorites.includes(movie.imdbID));

  return <MovieList movies={favoriteMovies} />;
};

export default FavoritePage;
