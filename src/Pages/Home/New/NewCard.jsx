import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { StorageContext } from '../../../config/Context/storage';

const New = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setStorageData } = useContext(StorageContext);
  const addcard = () => {
    setStorageData((prev) => {
      const newStorageData = prev.map((column) => {
        if (column.id === id) {
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                id: uuidv4(),
              },
            ],
          };
        }
        return column;
      });
      return newStorageData;
    });
    toast.success('New Card added successfully', { duration: 1000 });
    navigate('/');
  };
  return (
    <div>
      <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Card</h3>
          <p className="py-4">Details Here</p>
          <div className="modal-action">
            <Link to="/">
              <button type="button" className="btn btn-error">
                Cancel
              </button>
            </Link>
            <button onClick={addcard} type="button" className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
