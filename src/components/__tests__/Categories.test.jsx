import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Categories from '../Categories';

describe('Categories', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Categories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Post properly', () => {
    render(<Categories title="title" />);
    const titleElement = screen.getByRole('heading', {
      name: /Categories/i
    });
    expect(titleElement).toBeInTheDocument();
  });
});
