// src/components/MovieList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite } from '../redux/slices/authSlice';

interface MovieListProps {
  movies: Movie[];
  searchTerm: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, searchTerm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleFavoriteToggle = (imdbID: string) => {
    if (user) {
      if (user.favorites.includes(imdbID)) {
        dispatch(removeFavorite(imdbID));
      } else {
        dispatch(addFavorite(imdbID));
      }
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredMovies.map(movie => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
          {user && (
            <button onClick={() => handleFavoriteToggle(movie.imdbID)}>
              {user.favorites.includes(movie.imdbID) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
