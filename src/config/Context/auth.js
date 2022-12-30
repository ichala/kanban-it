import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { BsFillKanbanFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const image = user.photoURL || '/assets/images/no-image.png';
        setCurrentUser({
          name: user.displayName, image, id: user.uid, email: user.email,
        });
        setTimeout(() => {
          setLoading(false);
        }, 2000);
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
  if (!Loading) {
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
          <motion.div
            animate={{
              scale: [1, 1.2, 1, 1.2, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <BsFillKanbanFill className="animate-pulse text-primary" />
          </motion.div>
          KanBan-it!
        </h1>
        <div className="animate-pulse flex gap-2 items-center">Loading...</div>
      </div>
    </AuthContext.Provider>
  );
};
