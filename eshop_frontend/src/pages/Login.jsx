import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import login_art from '../assets/login_art.png';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='flex flex-col md:flex-row w-screen h-screen p-5 md:p-10'>
      <div className='flex-1 flex items-center justify-center'>
        <div>
          <div className='w-full md:hidden mb-5 md:rounded-xl'>
            <img src={login_art} alt="login" className='h-48 w-full object-cover rounded-xl' />
          </div>
          <div className='flex items-center font-bold text-2xl'>
            {isSignUp ? 'Create Account' : 'Welcome Back'}
            <img
              src="https://img.icons8.com/?size=100&id=1H52efUsDX7A&format=png&color=000000"
              alt="Welcome Icon"
              className='ml-2 size-7'
            />
          </div>
          <p className='mt-2 text-xs text-[#313957] max-w-xs'>Today is a fresh start! Your account awaits. Sign in to manage your orders.</p>
          <form className="mt-4 max-w-sm">
            <div>
              <label className="text-xs text-[#0C1421]">Email</label>
              <input
                className="mt-2 w-full py-2 px-4 text-xs text-[#8897AD] bg-[#F7FBFF] border border-[#D4D7E3] rounded focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Example@gmail.com"
              />
            </div>
            <div className="mt-4">
              <label className="text-xs text-[#0C1421]">{isSignUp ? 'Create Password' : 'Password'}</label>
              <input
                className="mt-2 w-full py-2 px-4 text-xs text-[#8897AD] bg-[#F7FBFF] border border-[#D4D7E3] rounded focus:outline-none focus:bg-white focus:border-purple-500"
                type="password"
                placeholder='At least 8 characters'
              />
            </div>
            {isSignUp && (
              <div className="mt-4">
                <label className="text-xs text-[#0C1421]">Confirm Password</label>
                <input
                  className="mt-2 w-full py-2 px-4 text-xs text-[#8897AD] bg-[#F7FBFF] border border-[#D4D7E3] rounded focus:outline-none focus:bg-white focus:border-purple-500"
                  type="password"
                  placeholder='At least 8 characters'
                />
              </div>
            )}
            {!isSignUp && (
              <div className="py-2 text-right">
                <a className="mt-2 text-xs text-[#1E4AE9] visited:text-purple-600">
                  Forgot Password?
                </a>
              </div>
            )}
            <button className={`${isSignUp && 'mt-5'} w-full py-2 px-4 font-bold text-white bg-[#162D3A] rounded shadow hover:opacity-80 focus:outline-none focus:shadow-outline`} type="button">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-[#294957]">Or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className='md:space-y-3 md:block flex md:space-x-0 space-x-2'>
            <button type="button" className="flex items-center w-full px-5 py-2.5 md:mb-2 text-sm font-medium text-[#313957] bg-[#F3F9FA] rounded-xl hover:scale-105 duration-200">
              <FcGoogle className='mr-2 size-5 md:ml-12' />
              <span className="hidden md:block">Sign in with Google</span>
              <span className='md:hidden'>Google</span>
            </button>
            <button type="button" className="flex items-center w-full px-5 py-2.5 text-sm font-medium text-[#313957] bg-[#F3F9FA] rounded-xl hover:scale-105 duration-200">
              <FaFacebook className='mr-2 size-5 text-[#1877F2] md:ml-12' />
              <span className="hidden md:block">Sign in with Facebook</span>
              <span className='md:hidden'>Facebook</span>
            </button>
          </div>
          <div className='flex justify-center mt-10'>
            <span className='text-[#313957]'>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button onClick={toggleForm} className='ml-1 text-[#1E4AE9]'>
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div >
      <div className='hidden md:flex md:w-1/2'>
        <img src={login_art} alt="login" className='h-full' />
      </div>
    </div >
  );
}

export default Login;
