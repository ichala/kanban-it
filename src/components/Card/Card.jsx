import React, { useContext } from 'react';
import { FaTasks } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import moment from 'moment';
import { AuthContext } from '../../config/Context/auth';

const Card = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div
      className="relative shadow-lg flex flex-col items-start p-4 mt-3 bg-primary rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      draggable="true"
    >

      <span className="flex items-center h-6 px-3 text-xs font-semibold text-primary bg-base-100 rounded-full">
        {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
      </span>
      <h4 className="mt-3 text-sm font-medium text-primary-content">
        {data.description.slice(0, 100)}
      </h4>
      <div className="flex items-center w-full gap-4 mt-3 text-xs font-medium text-primary-content">
        <div className="flex items-center ">
          <MdDateRange className="w-4 h-4" />
          <span className="ml-1 leading-none">
            {moment(data.date).format('MMM D ')}
          </span>
        </div>
        <div className="flex items-center">
          <FaTasks className="w-4 h-4" />
          <span className="ml-1 leading-none">
            {data.tasks?.filter((task) => task.completed).length }
            /
            {data.tasks?.length }
          </span>
        </div>

        <img
          alt="user-avatar"
          className="w-6 h-6 ml-auto rounded-full"
          src={currentUser.image}
        />
      </div>
    </div>
  );
};

export default Card;
