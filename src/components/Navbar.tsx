import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearUser } from '../redux/slices/authSlice';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <button className="nav-button" onClick={() => handleNavigate('/')}>Home</button>
      {user ? (
        <>
          <button className="nav-button" onClick={() => handleNavigate('/favorites')}>Favorites</button>
          <button className="nav-button" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button className="nav-button" onClick={() => handleNavigate('/login')}>Login</button>
          <button className="nav-button" onClick={() => handleNavigate('/signup')}>Signup</button>
        </>
      )}
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
