import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

const NewColumn = () => (
  <div className="flex flex-col flex-shrink-0 w-72 ">
    <div className="flex items-center justify-center flex-shrink-0  p-2">
      <span className=" text-sm font-semibold flex gap-2 items-center" />
      <div
        className="flex items-center justify-center w-6 h-6 ml-auto text-primary rounded"
      />
    </div>
    <div className="flex flex-col text-primary/30 hover:text-primary/100  rounded h-[700px] outline md:outline-dashed my-2 p-3 overflow-auto column-webkit justify-center items-center">
      <h1 className="rotate-90 flex text-2xl justify-center items-center gap-3">
        <BsPlusLg />
        New Column
      </h1>
    </div>
  </div>
);

export default NewColumn;
