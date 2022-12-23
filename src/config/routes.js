import CardDetails from '../components/Card/CardDetails';
import Home from '../Pages/Home/Home';
import New from '../Pages/Home/Cards/NewCard';
import NewColumn from '../Pages/Home/Columns/NewColumn';
import EditCard from '../Pages/Home/Cards/EditCard';

const routesConfig = [
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

];

export default routesConfig;
