import React from 'react';

const Home = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a href="#s" className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <button type="button" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
      </button>
    </div>
  </div>
);

export default Home;
