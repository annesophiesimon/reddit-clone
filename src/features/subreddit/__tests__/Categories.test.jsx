import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import { server } from '../../../mocks/handler';
import Categories from '../Categories';

// Enable API mocking before tests.
beforeEach(() => server.listen());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Categories', () => {
  it('should show loading state', async () => {
    renderWithProviders(<Categories />);

    expect(screen.getByText(/Data loading/i)).toBeInTheDocument();
  });
  it('should render a list of subreddit', async () => {
    await renderWithProviders(<Categories />);
    expect(
      await screen.findByRole('heading', {
        name: /Categories/i
      })
    ).toBeInTheDocument();
    expect(await screen.getByRole('button', { name: /Crossfit/i })).toBeInTheDocument();
  });
});
