import { render } from 'test/test.utils';
import Index from 'pages/index';

describe('Index pages', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('prints hello world!', () => {
    const { getByText } = render(<Index />);
    const element = getByText(/hello/i);

    expect(element).toHaveTextContent('Hello World!');
  });
});
