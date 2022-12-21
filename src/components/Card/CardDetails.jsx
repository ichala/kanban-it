import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { StorageContext } from '../../config/Context/storage';

const CardDetails = () => {
  const { StorageData, setStorageData } = useContext(StorageContext);
  const { id } = useParams();
  const [Column, setColumn] = useState(null);
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);

  const updateTask = (e, taskID) => {
    const { checked } = e.target;
    const column = StorageData.findIndex((item) => item.id === Column.id);
    const card = StorageData[column].cards.findIndex((item) => item.id === id);
    const task = StorageData[column].cards[card].tasks.findIndex((item) => item.id === taskID);
    StorageData[column].cards[card].tasks[task].completed = checked;
    setStorageData([...StorageData]);
  };

  useEffect(() => {
    StorageData.forEach((item) => {
      item.cards.forEach((task) => {
        if (task.id === id) {
          setData(task);
          setColumn(item);
        }
      });
      setLoading(false);
    });
  }, [StorageData, id, setStorageData]);

  if (!data && !Loading) {
    return <Navigate to="/" />;
  }

  return (
    data && (
      <div className="modal modal-open ">
        <div className="modal-box">
          <span className="flex items-center h-6  text-xs font-semibold text-primary bg-base-100 rounded-full">
            {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
          </span>
          <p className="py-4">{data.description}</p>
          <ul className="flex flex-col gap-1">
            {data.tasks?.map((task) => (
              <li key={task.id} className="flex border-primary p-2 justify-left items-center gap-2">
                <input
                  onChange={(e) => updateTask(e, task.id)}
                  type="checkbox"
                  defaultChecked={task.completed}
                  className="checkbox checkbox-primary"
                />
                <p className={task.completed ? 'line-through' : ''}>{task.content}</p>
              </li>
            ))}
          </ul>
          <div className="modal-action">
            <Link to="/" className="btn">
              Close
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default CardDetails;
