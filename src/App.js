import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from './config/Context/theme';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <ThemeProvider>
        { routes }
      </ThemeProvider>
    </>
  );
}

export default App;
