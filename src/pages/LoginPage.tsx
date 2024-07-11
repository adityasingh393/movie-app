import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser, User } from '../redux/slices/authSlice'; 
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    const existingUser = await localforage.getItem<User>(data.email);
    if (existingUser && existingUser.password === data.password) {
      dispatch(setUser(existingUser));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <input className="input-field" {...register('email')} type="email" placeholder="Email" required />
      <input className="input-field" {...register('password')} type="password" placeholder="Password" required />
      <button className="auth-button" type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
