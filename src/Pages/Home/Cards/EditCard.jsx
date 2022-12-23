import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import EditCardForm from '../../../components/Card/EditCardForm';
import { StorageContext } from '../../../config/Context/storage';

const EditCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Column, setColumn] = useState(null);
  const { StorageData, setStorageData } = useContext(StorageContext);
  const [Card, setCard] = useState(null);
  const [Loading, setLoading] = useState(true);

  const editcard = (values, tasks) => {
    const column = StorageData.findIndex((item) => item.id === Column.id);
    const card = StorageData[column].cards.findIndex((item) => item.id === id);
    StorageData[column].cards[card].tasks = tasks;
    StorageData[column].cards[card].title = values.title;
    StorageData[column].cards[card].description = values.description;
    StorageData[column].cards[card].date = values.date;
    toast.success('Card Updated');
    setStorageData([...StorageData]);
    navigate('/');
  };

  useEffect(() => {
    StorageData.forEach((item) => {
      item.cards.forEach((task) => {
        if (task.id === id) {
          setCard(task);
          setColumn(item);
        }
      });
      setLoading(false);
    });
  }, [StorageData, id, setStorageData]);
  if (!Card && !Loading) {
    return <Navigate to="/" />;
  }
  return (
    Card && (
    <div>
      <div className="modal modal-open">
        <div className="modal-box">
          <div className="py-4">
            <EditCardForm editcard={editcard} card={Card} />
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default EditCard;
