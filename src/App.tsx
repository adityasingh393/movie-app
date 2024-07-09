import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FavoritePage from './pages/FavoritePage';
import MovieDetails from './pages/MovieDetailsPage';
import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Provider store={store}>
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
