import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '.././components/Welcome';

describe('Welcome', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Welcome />);

    expect(asFragment(<Welcome />)).toMatchSnapshot();
  });
});
