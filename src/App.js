import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './config/Context/theme';
import { StorageProvider } from './config/Context/storage';
import routesConfig from './config/routes';
import { AuthContextProvider } from './config/Context/auth';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <ThemeProvider>
        <AuthContextProvider>
          <StorageProvider>
            <Toaster />
            {routes}
          </StorageProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
