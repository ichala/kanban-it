import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { BsFillKanbanFill } from 'react-icons/bs';
import { AuthContext } from '../../Context/auth';
import { auth } from '../../firebase';
import ThemeSelect from './ThemeSelect';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-00">
      <div className="flex-1">
        <button type="button" className="btn btn-ghost normal-case text-xl gap-1">
          <BsFillKanbanFill className="text-primary" />
          KanBan-it!
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <ThemeSelect />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={currentUser.image} alt="tets" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button type="button" disabled className="disabled ">
                <span className="text-gray-500">{currentUser.name.slice(0, 20) || currentUser.email.slice(0, 20) || currentUser.id.slice(0, 20) }</span>
              </button>
            </li>
            <li>
              <a href="#s">Settings</a>
            </li>
            <li>
              <button
                type="button"
                className="text-red-500"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
