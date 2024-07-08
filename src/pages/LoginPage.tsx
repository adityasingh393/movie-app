import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';
interface LoginFormInputs {
  email: string;
  password: string;
}
interface User {
    email: string;
    password: string;
    favorites: string[]; 
  }

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
const navigate=useNavigate();
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="email" placeholder="Email" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
