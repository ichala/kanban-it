import React, { useState, useContext } from 'react';
import { CirclePicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { StorageContext } from '../../../config/Context/storage';

const NewColumn = () => {
  const { setStorageData } = useContext(StorageContext);
  const [color, setColor] = useState('8ED1FC');
  const navigate = useNavigate();
  const [NewColumnName, setNewColumnName] = useState('');
  const handleChange = (color) => {
    setColor(color.hex);
  };
  const handleNewColumn = () => {
    setStorageData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: NewColumnName,
        color,
        cards: [],
      },
    ]);
    toast.success(`${NewColumnName} added successfully`, { duration: 1000 });
    navigate('/');
  };

  return (
    <div className="modal modal-open">
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
          <Link to="/" className="btn btn-sm">
            Cancel
          </Link>
          <button type="button" href="#new_album" onClick={handleNewColumn} className="btn btn-primary btn-sm">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewColumn;
