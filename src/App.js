import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './config/Context/theme';
import { StorageProvider } from './config/Context/storage';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <StorageProvider>
        <ThemeProvider>
          <Toaster />
          { routes }
        </ThemeProvider>
      </StorageProvider>
    </>
  );
}

export default App;
