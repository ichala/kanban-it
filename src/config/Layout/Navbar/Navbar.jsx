import React from 'react';
import { BsFillKanbanFill } from 'react-icons/bs';
import ThemeSelect from './ThemeSelect';

const Navbar = () => (
  <div className="navbar bg-base-300">
    <div className="flex-1">
      <a href="#s" className="btn btn-ghost normal-case text-xl gap-1">
        <BsFillKanbanFill className="text-primary" />
        KanBan-it!
      </a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <ThemeSelect />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="tets" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="#s" className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a href="#s">Settings</a>
          </li>
          <li>
            <a href="#s">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
