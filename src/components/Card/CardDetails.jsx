import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { StorageContext } from '../../config/Context/storage';
import DeleteCard from './DeleteCard';

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
          <div className="flex justify-between">
            <span className="flex items-center h-6  text-xs font-semibold text-primary bg-base-100 rounded-full">
              {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
            </span>
            <span className="flex items-center h-6  text-xs font-semibold text-primary">
              {moment(data.date).format('MMM Do yyyy ')}
            </span>
          </div>
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
          <div className="modal-action flex justify-between">
            <DeleteCard id={data.id} column={Column.id} />
            <div className="flex gap-2">
              <Link to={`/${data.id}/edit`} className="btn btn-warning btn-sm">
                Edit
              </Link>
              <Link to="/" className="btn btn-sm">
                Close
              </Link>

            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CardDetails;
