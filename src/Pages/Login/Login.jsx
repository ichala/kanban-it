import React, { useContext, useEffect } from 'react';
import { BsFillKanbanFill, BsGithub, BsGoogle } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../config/Context/auth';
import { signInWithGithub, signInWithGoogle } from '../../config/firebase';

const Login = () => {
  const user = useContext(AuthContext).currentUser;
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (user) {
      const returnUrl = searchParams.get('returnUrl');
      window.location.href = returnUrl || '/';
    }
  }, [user]);

  return (
    <div className="min-h-screen flex-col overflow-hidden bg-base-300 flex justify-center items-center">
      <h1 className=" md:text-6xl text-5xl  flex gap-2 items-center  font-bold text-center mb-4 cursor-pointer">
        <BsFillKanbanFill className="text-primary" />
        KanBan-it!
      </h1>
      <div className="py-12 px-12 bg-base-200 rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Login To Start
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-base-content/60 tracking-wide cursor-pointer">
            Create an account to enjoy all the services without any limtations
          </p>
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <button
            onClick={signInWithGoogle}
            type="button"
            className="py-3 w-64 text-md text-white btn-primary  rounded-2xl flex justify-center text-center gap-2 items-center"
          >
            <BsGoogle size={20} />
            <span>Login with Google</span>
          </button>
          <button
            onClick={signInWithGithub}
            type="button"
            className="py-3 w-64 text-md text-white btn-primary  rounded-2xl flex justify-center text-center gap-2 items-center"
          >
            <BsGithub size={20} />
            <span>Login with Github</span>
          </button>
        </div>
      </div>
      <span>
        Created by
        <a className="text-primary" href="https://chala.dev" target="_blank" rel="noreferrer"> Chala</a>

      </span>
      <span>
        Get
        <a className="text-primary" href="https://github.com/ichala/kanban-it" target="_blank" rel="noreferrer"> SourceCode</a>

      </span>

    </div>
  );
};

export default Login;
