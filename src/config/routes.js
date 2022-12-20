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
        path: '/new',
        element: <NewColumn />,
      },
    ],
  },

];

export default routesConfig;
