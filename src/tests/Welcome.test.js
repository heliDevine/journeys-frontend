import { render } from '@testing-library/react';
import Info from '.././components/Info';

describe('Info', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Info />);

    expect(asFragment(<Info />)).toMatchSnapshot();
  });
});
