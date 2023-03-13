import Header from '../Header';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import { server } from '../../mocks/handler';

// Enable API mocking before tests.
beforeEach(() => server.listen());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Header', () => {
  it('renders correctly', () => {
    const header = renderWithProviders(<Header />);
    expect(header.container).toMatchSnapshot();
  });
});
