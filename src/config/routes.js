import CardDetails from '../components/Card/CardDetails';
import Home from '../Pages/Home/Home';
import New from '../Pages/Home/Cards/NewCard';
import NewColumn from '../Pages/Home/Columns/NewColumn';
import EditCard from '../Pages/Home/Cards/EditCard';
import Protected from './Context/protected_routes';
import Login from '../Pages/Login/Login';

const routesConfig = [
  {
    element: <Protected />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/:id/new',
            element: <New />,
          },
          {
            path: '/:id/view',
            element: <CardDetails />,
          },
          {
            path: '/:id/edit',
            element: <EditCard />,
          },
          {
            path: '/new',
            element: <NewColumn />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routesConfig;
