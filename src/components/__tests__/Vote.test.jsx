import Vote from '../Vote';
import renderer from 'react-test-renderer';

describe('Vote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Vote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
