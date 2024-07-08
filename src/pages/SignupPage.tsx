import React from 'react';
import { useForm } from 'react-hook-form';
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';

interface SignupFormInputs {
  email: string;
  password: string;
}
interface User {
    email: string;
    password: string;
    favorites: string[];
  }

const SignupPage: React.FC = () => {
  const { register, handleSubmit } = useForm<SignupFormInputs>();
const navigate=useNavigate();
  const onSubmit = async (data: SignupFormInputs) => {
    const existingUser = await localforage.getItem<User>(data.email);
    if (existingUser) {
      alert('User already exists');
    } else {
      const newUser: User = { ...data, favorites: [] };
      await localforage.setItem(data.email, newUser);
      alert('Signup successful');
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="email" placeholder="Email" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupPage;
