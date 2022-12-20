import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const StorageContext = createContext();

const InitialData = [
  {
    id: uuidv4(),
    color: '#ff5722',
    tasks: [
      {
        id: uuidv4(),
      },
      {
        id: uuidv4(),
      },
      {
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    color: '#795548',
    tasks: [
      {
        id: uuidv4(),
      },
      {
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    color: '#e91e63',
    tasks: [
      {
        id: uuidv4(),
      },
    ],
  },
];

export const StorageProvider = ({ children }) => {
  const [StorageData, setStorageData] = useState(JSON.parse(localStorage.getItem('Kanban-it')) || InitialData);
  localStorage.setItem('Kanban-it', JSON.stringify(StorageData));
  return (
    <StorageContext.Provider value={{ StorageData, setStorageData }}>
      {children}
    </StorageContext.Provider>
  );
};
