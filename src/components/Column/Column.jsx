import React, { useContext } from 'react';
import { BsArrowLeftRight, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { StorageContext } from '../../config/Context/storage';
import NewCard from './NewCard';

const Column = ({ children, data }) => {
  const { setStorageData } = useContext(StorageContext);

  const deleteColumn = (id) => {
    setStorageData((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <div className="flex flex-col flex-shrink-0 w-72 ">
      <div className="flex group items-center justify-between  flex-shrink-0  p-2">
        <span className=" text-sm font-semibold flex gap-2 items-center ">
          <BsCircleFill color={data.color} />
          {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
        </span>
        <div className="flex ">
          <div
            className="group-hover:visible flex  items-center invisible  justify-center w-6 h-6 ml-auto text-primary rounded"
          >
            <label htmlFor="edit-columns">
              <BsArrowLeftRight className="cursor-pointer" />
            </label>

          </div>
          <div
            className="group-hover:visible flex  items-center invisible  justify-center w-6 h-6 ml-auto text-primary rounded"
          >

            <BsFillTrashFill className="text-error cursor-pointer" onClick={() => deleteColumn(data.id)} />
          </div>

        </div>

      </div>
      <div className="flex shadow-md flex-col rounded h-[700px] bg-base-100 my-2 p-3 overflow-x-hidden overflow-y-auto column-webkit">
        {children}
        <NewCard id={data.id} />
      </div>

    </div>
  );
};

export default Column;
