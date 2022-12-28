import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { BsFillKanbanFill } from 'react-icons/bs';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const image = user.photoURL || '/assets/images/no-image.png';
        setCurrentUser({ name: user.displayName, image, id: user.uid });
        setLoading(false);
      } else {
        setCurrentUser(null);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    });
    return () => {
      unsub();
    };
  }, []);
  if (!Loading && currentUser) {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      <div className="min-h-screen flex-col overflow-hidden bg-base-300 flex justify-center items-center">
        <h1 className="animate-bounce  md:text-6xl text-5xl  flex gap-2 items-center  font-bold text-center mb-4 cursor-pointer">
          <BsFillKanbanFill className="animate-pulse text-primary" />
          KanBan-it!
        </h1>
        <div className="animate-pulse flex gap-2 items-center">Loading...</div>
      </div>
    </AuthContext.Provider>
  );
};
