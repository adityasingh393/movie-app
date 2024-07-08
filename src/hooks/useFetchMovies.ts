import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setMovies } from '../redux/slices/movieSlice';

const useFetchMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('src/data.json');
        dispatch(setMovies(response.data));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [dispatch]);
};

export default useFetchMovies;
