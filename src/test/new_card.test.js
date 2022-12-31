import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewCard from '../Pages/Home/Cards/NewCard';
import { AuthContext } from '../config/Context/auth';
import { StorageProvider } from '../config/Context/storage';

describe('New card page content test', () => {
  test('Renders the new card page with the correct fields', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            user: {
              name: 'testuser',
              image: 'https://placeimg.com/192/192/people',
              id: '1',
              email: 'test@test.com',
            },
          }}
        >
          <StorageProvider>
            <NewCard />
          </StorageProvider>
        </AuthContext.Provider>
      </BrowserRouter>,
    );

    // Tag input  exist
    const tag = document.querySelector('input[name="title"]');
    expect(tag).toBeTruthy();
    // Description field exist
    const description = document.querySelector('textarea[name="description"]');
    expect(description).toBeTruthy();

    // Submit button exist
    const submit = document.querySelector('button[type="submit"]');
    expect(submit).toBeTruthy();
    // cancel button exist
    const cancel = document.querySelector('button[type="button"]');
    expect(cancel).toBeTruthy();
    // date input exist
    const date = document.querySelector('input[name="date"]');
    expect(date).toBeTruthy();
  });
});
