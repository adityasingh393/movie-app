import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite } from '../redux/slices/authSlice';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
 import './MovieList.css'; 

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
  Director:string;
  Actors: string;
  Released: string;
  Runtime:string;
  Genre:string;
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
    <div >
      {filteredMovies.map(movie => (
        <Card key={movie.imdbID} className="movie-card">
          <CardMedia
            component="img"
            alt={movie.Title}
            image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
            className="poster-conatiner"
          />
        <div className=' details-container'>
        
           <h2>

              {movie.Title}
           </h2>
           <p>{movie.Plot}</p>
                <p>Director: {movie.Director}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Released: {movie.Released}</p>
                <p>Runtime: {movie.Runtime}</p>
                
                </div>
          {user && (
           <button 
              aria-label="toggle favorite"
              onClick={() => handleFavoriteToggle(movie.imdbID)}
              className="favorite-button"
            >
              <ThumbUpIcon color={user.favorites.includes(movie.imdbID) ? 'primary' : 'action'} />
           </button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
