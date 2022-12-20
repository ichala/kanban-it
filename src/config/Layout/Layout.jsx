import React, { useContext } from 'react';
import { ThemeContext } from '../Context/theme';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <main data-theme={Theme} className="bg-base-300 min-h-screen">
      <Navbar />
      <div className="my-3 p-3">
        <div className="flex flex-grow  mt-4 container-webkit overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
