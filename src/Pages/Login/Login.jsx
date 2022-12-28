import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const Login = () => (
  <div className="min-h-screen overflow-hidden bg-base-300 flex justify-center items-center">
    <div className="py-12 px-12 bg-base-200 rounded-2xl shadow-xl z-20">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login To Start</h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Create an
          account to enjoy all the services without any limtations
        </p>
      </div>
      <div className="space-y-4 flex flex-col justify-center items-center">
        <button type="button" className="py-3 w-64 text-md text-white btn-primary  rounded-2xl flex justify-center text-center gap-2 items-center">
          <BsGoogle size={20} />
          <span>Login with Google</span>
        </button>
        <button type="button" className="py-3 w-64 text-md text-white btn-primary  rounded-2xl flex justify-center text-center gap-2 items-center">
          <BsGithub size={20} />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  </div>
);

export default Login;
