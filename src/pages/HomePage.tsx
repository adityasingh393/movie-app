import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MovieList from '../components/MovieList';
import useFetchMovies from '../hooks/useFetchMovies';

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  useFetchMovies();

  const movies = useSelector((state: RootState) => state.movies.movies);

  return <MovieList movies={movies} searchTerm={searchTerm}/>;
};

export default HomePage;
