import React, { useContext } from 'react';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { StorageContext } from '../../config/Context/storage';
import NewCard from '../Card/NewCard';

const Column = ({ children, color, id }) => {
  const { setStorageData } = useContext(StorageContext);

  const deleteColumn = (id) => {
    setStorageData((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <div className="flex flex-col flex-shrink-0 w-72 ">
      <div className="flex group items-center justify-center flex-shrink-0  p-2">
        <span className=" text-sm font-semibold flex gap-2 items-center">
          <BsCircleFill color={color} />
          Column Name
        </span>
        <div
          className="group-hover:visible flex  items-center invisible justify-center w-6 h-6 ml-auto text-primary rounded"
        >
          <BsFillTrashFill className="text-error" onClick={() => deleteColumn(id)} />
        </div>
      </div>
      <div className="flex flex-col rounded h-[700px] bg-base-100 my-2 p-3 overflow-auto column-webkit">
        {children}
        <NewCard />
      </div>
    </div>
  );
};

export default Column;
