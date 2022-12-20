import React, { useState, useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { CirclePicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { StorageContext } from '../../config/Context/storage';

const NewColumn = () => {
  const { setStorageData } = useContext(StorageContext);
  const [color, setColor] = useState('8ED1FC');
  const [NewColumnName, setNewColumnName] = useState('');
  const handleChange = (color) => {
    setColor(color.hex);
  };
  const handleNewColumn = () => {
    setStorageData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name: NewColumnName,
        color,
        tasks: [],
      },
    ]);
    toast.success(`${NewColumnName} added successfully`, { duration: 1000 });
  };

  return (
    <>
      <a
        href="#new-group"
        tabIndex={-4}
        role="button"
        className="flex flex-col flex-shrink-0 w-72 mx-5 "
      >
        <div className="flex items-center justify-center flex-shrink-0  p-2">
          <span className=" text-sm font-semibold flex gap-2 items-center" />
          <div className="flex items-center justify-center w-6 h-6 ml-auto text-primary rounded" />
        </div>
        <div className="flex flex-col text-primary/30 hover:text-primary/100  rounded h-[700px] outline md:outline-dashed my-2 p-3 overflow-auto column-webkit justify-center items-center">
          <h1 className="rotate-90 flex text-2xl justify-center items-center gap-3">
            <BsPlusLg />
            New Column
          </h1>
        </div>
      </a>
      <div className="modal" id="new-group">
        <div className="modal-box flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Column Name"
            onChange={(e) => {
              setNewColumnName(e.target.value);
            }}
            className="input input-bordered w-full max-w-xs my-2"
          />
          <CirclePicker
            className="py-4 color_pick_item"
            color={color}
            triangle="hide"
            onChangeComplete={handleChange}
          />
          <div className="modal-action">
            <a href="#new_album" onClick={handleNewColumn} className="btn">
              Create
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewColumn;
