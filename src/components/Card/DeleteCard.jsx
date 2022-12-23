import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { StorageContext } from '../../config/Context/storage';

const DeleteCard = ({ id, column }) => {
  const [ConfirmDelete, setConfirmDelete] = useState(false);
  const { StorageData, setStorageData } = useContext(StorageContext);
  const navigate = useNavigate();

  const ConfirmDeleteCard = (id, column) => {
    const tagretColumn = StorageData.findIndex((item) => item.id === column);
    StorageData[tagretColumn].cards = StorageData[tagretColumn].cards.filter(
      (item) => item.id !== id,
    );
    toast.success('Card Deleted');
    setStorageData([...StorageData]);
    navigate('/');
  };

  return (
    <>
      {ConfirmDelete ? (
        <>
          <div className="flex flex-col text-center justify-center items-center">
            Are you sure 😮 ?
            <br />
            <div className="flex flex-row gap-2">
              <button onClick={() => { setConfirmDelete(false); }} type="button" className="btn btn-success btn-sm">
                No
              </button>
              <button onClick={() => { ConfirmDeleteCard(id, column); }} type="button" className="btn btn-error btn-sm">
                yes
              </button>
            </div>
          </div>
        </>
      )
        : (
          <button onClick={() => { setConfirmDelete(true); }} type="button" className="btn btn-error btn-sm">
            Delete
          </button>
        )}
    </>
  );
};

export default DeleteCard;
