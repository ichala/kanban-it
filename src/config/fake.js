import { v4 as uuidv4 } from 'uuid';

const mockData = [
  {
    id: uuidv4(),
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
    tasks: [
      {
        id: uuidv4(),
      },
    ],
  },
];

export default mockData;
