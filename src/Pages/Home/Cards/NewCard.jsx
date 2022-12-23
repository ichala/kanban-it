import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

import { StorageContext } from '../../../config/Context/storage';
import CardForm from '../../../components/Card/NewCardForm';

const New = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setStorageData } = useContext(StorageContext);
  const addcard = (values, tasks) => {
    const CleanTasks = tasks.filter((task) => task.content.trim() !== '');
    setStorageData((prev) => {
      const newStorageData = prev.map((column) => {
        if (column.id === id) {
          return {
            ...column,
            cards: [
              ...column.cards,
              {
                id: uuidv4(),
                title: values.title,
                description: values.description,
                date: values.date,
                tasks: CleanTasks,
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
          <div className="py-4">
            <CardForm addcard={addcard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
