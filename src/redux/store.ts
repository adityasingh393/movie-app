import { configureStore, combineReducers, Store } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import authReducer, { setUser } from './slices/authSlice';
import { loadState, saveState } from '../utils/localforage';
import { AuthState } from './slices/authSlice'; 

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

const store: Store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  saveState('auth', store.getState().auth);
});

const isAuthState = (state: any): state is AuthState => {
  return state && typeof state === 'object' && 'user' in state;
};

(async () => {
  const loadedState = await loadState('auth');
  const authState: AuthState | null = isAuthState(loadedState) ? loadedState : null;
  if (authState && authState.user) {
    store.dispatch(setUser(authState.user));
  }
})();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
