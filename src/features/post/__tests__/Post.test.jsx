import React from 'react';
import { screen } from '@testing-library/react';
import Post from '../Post';
import { renderWithProviders } from '../../../utils/test-utils';
import { server } from '../../../mocks/handler';

// Enable API mocking before tests.
beforeEach(() => server.listen());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Post', () => {
  it('renders correctly', () => {
    const post = renderWithProviders(<Post subreddit="r/sewing" />);
    expect(post.container).toMatchSnapshot();
  });

  it('should show loading state', async () => {
    renderWithProviders(<Post subreddit="r/sewing" />);

    expect(screen.getByText(/There is no post yet/i)).toBeInTheDocument();
  });
  it('should render post result', async () => {
    renderWithProviders(<Post subreddit="r/sewing" />);
    expect(await screen.findByText(/kevin/i)).toBeInTheDocument();
  });
});

// add test for comment?
// add test on click on categories
// await userEvent.click(screen.getByRole('button', { name: /Crossfit/i }));

// expect(await screen.findByText(/How to improve my muscle up/i)).toBeInTheDocument();
