import React from 'react';
import SearchBar from '../SearchBar';
import { renderWithProviders } from '../../../utils/test-utils';
import { server } from '../../../mocks/handler';

import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

// Enable API mocking before tests.
beforeEach(() => server.listen());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('SearchBar', () => {
  it('renders correctly', () => {
    const searchBar = renderWithProviders(<SearchBar />);
    expect(searchBar.container).toMatchSnapshot();
  });

  it('should render no post when search params empty', async () => {
    await renderWithProviders(<SearchBar />);

    const inputElement = screen.getByRole('textbox', { name: /search posts/i });
    const submitElement = screen.getByRole('button', { name: /search/i });
    await userEvent.type(inputElement, 'bachata');
    await userEvent.click(submitElement);
  });
});
