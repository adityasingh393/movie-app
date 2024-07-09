import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import authReducer, { setUser } from './slices/authSlice';
import { loadState, saveState } from '../utils/localforage';

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  saveState('auth', store.getState().auth);
});

(async () => {
  const authState = await loadState('auth');
  if (authState) {
    store.dispatch(setUser(authState.user));
  }
})();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
