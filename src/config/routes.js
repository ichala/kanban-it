import CardDetails from '../components/Card/CardDetails';
import Home from '../Pages/Home/Home';
import New from '../Pages/Home/New/NewCard';
import NewColumn from '../Pages/Home/New/NewColumn';

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
        path: '/new',
        element: <NewColumn />,
      },
    ],
  },

];

export default routesConfig;
