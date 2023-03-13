import Comment from '../Comment';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

let date = new Date(Date.now());
date.setMinutes(date.getMinutes() - 30);
date = Math.floor(date / 1000);
const comments = [
  {
    id: 1,
    author: 'Joel',
    created_utc: date,
    body: 'I like this pattern'
  }
];
describe('Comment', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Comment comments={comments} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders empty elements when comments is empty', () => {
    const { container } = render(<Comment comments={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders components with author,time and body', () => {
    render(<Comment comments={comments} />);
    const nameElement = screen.getByText('Joel');
    const timeElement = screen.getByText('30 minutes ago');
    const contentElement = screen.getByText('I like this pattern');

    expect(nameElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
