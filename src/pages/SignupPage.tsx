import React from 'react';
import { useForm } from 'react-hook-form';
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

interface SignupFormInputs {
  email: string;
  password: string;
}

interface User {
  email: string;
  password: string;
  favorites: string[];
  comments: Record<string, Comment[]>;
  ratings: Record<string, number>;
}

const SignupPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      await schema.validate(data);

      const existingUser = await localforage.getItem<User>(data.email);
      if (existingUser) {
        alert('User already exists');
      } else {
        const newUser: User = {
          ...data,
          favorites: [],
          comments: {},
          ratings: {},
        };
        await localforage.setItem(data.email, newUser);
        alert('Signup successful');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <input className="input-field" {...register('email')} type="email" placeholder="Email" required />
      {errors.email && <span className="error-message">{errors.email.message}</span>}
      <input className="input-field" {...register('password')} type="password" placeholder="Password" required />
      {errors.password && <span className="error-message">{errors.password.message}</span>}
      <button className="auth-button" type="submit">Signup</button>
    </form>
  );
};

export default SignupPage;
