import React from 'react';
import { screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../utils/test-utils';
import Home from '../Home';
import userEvent from '@testing-library/user-event';

import { server } from '../../mocks/handler';

// Enable API mocking before tests.
beforeEach(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
//afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Home component', () => {
  it('should show loading state', async () => {
    renderWithProviders(<Home />);

    expect(screen.getByText(/Data loading/i)).toBeInTheDocument();
  });

  it('should render post result', async () => {
    renderWithProviders(<Home />);
    expect(await screen.findByText(/kevin/i)).toBeInTheDocument();
  });

  it('should render search result', async () => {
    await renderWithProviders(<Home />);
    expect(await screen.findByText(/kevin/i)).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: /search posts/i });
    const submitElement = screen.getByRole('button', { name: /search/i });
    await userEvent.type(inputElement, 'bachata');
    await userEvent.click(submitElement);

    expect(await screen.findByText(/bachata/i)).toBeInTheDocument();
  });

  it('should render no post when search params empty', async () => {
    await renderWithProviders(<Home />);
    expect(await screen.findByText(/kevin/i)).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: /search posts/i });
    const submitElement = screen.getByRole('button', { name: /search/i });
    await userEvent.click(submitElement);

    expect(inputElement.value).toBe('');
    expect(await screen.findByText(/There is no post yet/i)).toBeInTheDocument();
  });

  it('should render post on click on subreddit button', async () => {
    await renderWithProviders(<Home />);

    expect(await screen.findByText(/kevin/i)).toBeInTheDocument();
    expect(await screen.getByRole('heading', { name: /categories/i })).toBeInTheDocument();
    expect(await screen.getByRole('button', { name: /Crossfit/i })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /Crossfit/i }));

    expect(await screen.findByText(/How to improve my muscle up/i)).toBeInTheDocument();
  });
});
