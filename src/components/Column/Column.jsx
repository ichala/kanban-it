import React from 'react';
import { BsCircleFill, BsPlusLg } from 'react-icons/bs';
import Card from '../Card/Card';

const Column = () => (
  <div className="flex flex-col flex-shrink-0 w-72 ">
    <div className="flex items-center justify-center flex-shrink-0  p-2">
      <span className=" text-sm font-semibold flex gap-2 items-center">
        <BsCircleFill className="text-primary" />
        Column Name
      </span>
      <button
        type="button"
        className="flex items-center justify-center w-6 h-6 ml-auto text-primary rounded"
      >
        <BsPlusLg />
      </button>
    </div>
    <div className="flex flex-col rounded h-[700px] bg-base-100 my-2 p-3 overflow-auto column-webkit">
      {Array(10)
        .fill(<Card />)
        ?.map((card) => card)}
    </div>
  </div>
);

export default Column;
