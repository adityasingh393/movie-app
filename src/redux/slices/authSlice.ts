import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';

interface Comment {
  movieId: string;
  text: string;
}

interface Rating {
  movieId: string;
  rating: number;
}

export interface User {
  email: string;
  password: string;
  favorites: string[];
  comments: Record<string, Comment[]>;
  ratings: Record<string, number>;
}

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      localforage.removeItem('user');
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.favorites.push(action.payload);
        localforage.setItem('user', state.user);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.favorites = state.user.favorites.filter(id => id !== action.payload);
        localforage.setItem('user', state.user);
      }
    },
    addComment: (state, action: PayloadAction<{ movieId: string; comment: string }>) => {
      if (state.user) {
        const { movieId, comment } = action.payload;
        if (!state.user.comments[movieId]) {
          state.user.comments[movieId] = [];
        }
        state.user.comments[movieId].push({ movieId, text: comment });
        localforage.setItem('user', state.user);
      }
    },
    addRating: (state, action: PayloadAction<{ movieId: string; rating: number }>) => {
      if (state.user) {
        const { movieId, rating } = action.payload;
        state.user.ratings[movieId] = rating;
        localforage.setItem('user', state.user);
      }
    }
  },
});

export const { setUser, clearUser, addFavorite, removeFavorite, addComment, addRating } = authSlice.actions;
export default authSlice.reducer;
