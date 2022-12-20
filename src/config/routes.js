import Home from '../Pages/Home/Home';
import New from '../Pages/Home/New/New';

const routesConfig = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/:id/new',
        element: <New />,
      },
    ],
  },

];

export default routesConfig;
