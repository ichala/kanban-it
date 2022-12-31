import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NewCard from '../components/Column/NewCard';
import { AuthContext } from '../config/Context/auth';
import { StorageProvider } from '../config/Context/storage';
import { ThemeProvider } from '../config/Context/theme';
import NewColumn from '../Pages/Home/Columns/NewColumn';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Backup from '../Pages/Home/Backup/Backup';

it('renders Home correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ThemeProvider>
          <AuthContext.Provider
            value={{
              currentUser: {
                name: 'testuser', image: 'https://placeimg.com/192/192/people', id: '1', email: 'test@test.com',
              },
            }}
          >
            <StorageProvider>
              <Home />
            </StorageProvider>
          </AuthContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Login correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ThemeProvider>
          <AuthContext.Provider
            value={{
              currentUser: {
                name: 'testuser', image: 'https://placeimg.com/192/192/people', id: '1', email: 'tst@test.com',
              },
            }}
          >
            <StorageProvider>
              <Login />
            </StorageProvider>
          </AuthContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders NewColumn  correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ThemeProvider>
          <AuthContext.Provider
            value={{
              currentUser: {
                name: 'testuser', image: 'https://placeimg.com/192/192/people', id: '1', email: 'tst@test.com',
              },
            }}
          >
            <StorageProvider>
              <NewColumn />
            </StorageProvider>
          </AuthContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders NewCard  correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ThemeProvider>
          <AuthContext.Provider
            value={{
              currentUser: {
                name: 'testuser', image: 'https://placeimg.com/192/192/people', id: '1', email: 'tst@test.com',
              },
            }}
          >
            <StorageProvider>
              <NewCard />
            </StorageProvider>
          </AuthContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Backup  correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ThemeProvider>
          <AuthContext.Provider
            value={{
              currentUser: {
                name: 'testuser', image: 'https://placeimg.com/192/192/people', id: '1', email: 'tst@test.com',
              },
            }}
          >
            <StorageProvider>
              <Backup />
            </StorageProvider>
          </AuthContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
