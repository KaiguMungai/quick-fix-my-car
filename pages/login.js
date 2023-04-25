import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(0);
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <Layout title="Log In">
      <nav className="flex h-12  breakdown-nav items-center px-5 shadow-md justify-between">
        <h1 className="text-2xl font-bold">Log In</h1>
        <div>
          <Link href="/" legacyBehavior>
            <a className="link">Back to Home Page</a>
          </Link>
        </div>
      </nav>
      <form
        className="mx-auto max-width-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-4 text-display">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            {...register('email', {
              required: 'Please Enter your email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9_.+-]+$/i,
                message: 'Please enter a valid email',
              },
            })}
            className="w-full py-2"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4 text-display">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            {...register('password', {
              required: 'Please Enter your email',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters',
              },
            })}
            className="w-full py-2"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4 py-4">
          <button className="primary-button">Log In</button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href="/signin" legacyBehavior>
            <a className="link">Register</a>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
