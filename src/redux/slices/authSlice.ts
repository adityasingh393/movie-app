import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';

interface User {
  email: string;
  password: string;
  favorites: string[];
}

interface AuthState {
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
  },
});

export const { setUser, clearUser, addFavorite, removeFavorite } = authSlice.actions;

export default authSlice.reducer;
