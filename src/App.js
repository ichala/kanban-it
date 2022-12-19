import { useRoutes } from 'react-router-dom';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);

  return (
    <>
      { routes }

    </>
  );
}

export default App;
