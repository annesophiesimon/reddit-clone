import { render, screen } from '@testing-library/react';
import Post from '../Post';
import renderer from 'react-test-renderer';

describe('Post', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Post />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Post properly', () => {
    render(<Post title="title" />);
    const titleElement = screen.getByRole('heading', {
      name: /title/i
    });
    expect(titleElement).toBeInTheDocument();
  });
});
