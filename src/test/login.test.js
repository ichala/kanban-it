import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../config/Context/auth';
import Login from '../Pages/Login/Login';
import '@testing-library/jest-dom';

describe('Login page content test', () => {
  test('renders the login page', () => {
    render(
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>,
    );
    // Logo exist
    expect(screen.getByRole('heading')).toHaveTextContent('KanBan-it!');
    // Loading text exist
    expect(screen.getByText('Loading...')).toHaveClass(
      'animate-pulse flex gap-2 items-center',
    );
  });
  test('renders the login buttons after loading', async () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <Login />
        </AuthContextProvider>
      </BrowserRouter>,
    );

    await waitFor(
      () => {
        // Login buttons exist
        expect(screen.getByText('Login with Google')).toBeInTheDocument();
        expect(screen.getByText('Login with Github')).toBeInTheDocument();
        // Devoloper Infos & Source Code btn exist
        expect(screen.getByText('SourceCode')).toBeInTheDocument();
        expect(screen.getByText('Created by')).toBeInTheDocument();
        expect(screen.getByText('Chala')).toBeInTheDocument();
      },
      {
        timeout: 4000,
      },
    );
  });
});
