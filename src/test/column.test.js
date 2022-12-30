import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../config/Context/auth';
import { StorageProvider } from '../config/Context/storage';
import NewColumn from '../Pages/Home/Columns/NewColumn';

describe('New Column page content test', () => {
  test('Renders the new column page with the correct fields', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{ user: { uid: '123', displayName: 'test' } }}
        >
          <StorageProvider>
            <NewColumn />
          </StorageProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );
    // Color picker exist
    const boxes = document.querySelector('.circle-picker');
    expect(boxes).toBeTruthy();
    // Color Name input exist
    expect(screen.getAllByPlaceholderText('Column Name')).toHaveLength(1);
    // Create and Cancel buttons exist
    expect(screen.getByText('Create')).toBeTruthy();
    expect(screen.getByText('Cancel')).toBeTruthy();
  });
});

describe('Add Column Features', () => {
  test('Add a new column when click on create', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{ user: { uid: '123', displayName: 'test' } }}
        >
          <StorageProvider>
            <NewColumn />
          </StorageProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );
    act(() => {
      // Get the create button
      const createBtn = screen.getByText('Create');
      // Get the input field
      const input = screen.getAllByPlaceholderText('Column Name')[0];
      // Change the input value
      fireEvent.change(input, { target: { value: 'Test Column' } });
      // Click on create button
      createBtn.click();
    });
    // Check if the new column is added to the local storage
    expect(JSON.parse(localStorage.getItem('Kanban-it'))[3].title).toBe(
      'Test Column',
    );
  });
  test('Redirect to home page on click cancel', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{ user: { uid: '123', displayName: 'test' } }}
        >
          <StorageProvider>
            <NewColumn />
          </StorageProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );
    act(() => {
      // Get the create button
      const createBtn = screen.getByText('Cancel');
      createBtn.click();
    });
    // redirect to home page
    expect(window.location.pathname).toBe('/');
  });
});
