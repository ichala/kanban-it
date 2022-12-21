import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import moment from 'moment';

const Card = ({ data }) => (
  <div
    className="relative flex flex-col items-start p-4 mt-3 bg-primary rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
    draggable="true"
  >
    <button
      type="button"
      className="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
    >
      <BsThreeDotsVertical className="w-4 h-4 fill-current" />

    </button>
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
        <BiCommentDetail className="w-4 h-4" />
        <span className="ml-1 leading-none">4</span>
      </div>

      <img
        alt="az"
        className="w-6 h-6 ml-auto rounded-full"
        src="https://placeimg.com/80/80/people"
      />
    </div>
  </div>
);

export default Card;
