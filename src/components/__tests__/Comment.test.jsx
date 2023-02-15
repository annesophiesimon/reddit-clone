import Comment from '../Comment';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Comment', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Comment />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<Comment />);
    const textElement = screen.getByText('hours ago');

    expect(textElement).toBeInTheDocument();
  });

  it('renders name, time and content', () => {
    render(<Comment name="Lea" time={8} content="bla bla bla" />);
    const nameElement = screen.getByText('Lea');
    const timeElement = screen.getByText('8 hours ago');
    const contentElement = screen.getByText('bla bla bla');

    expect(nameElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
