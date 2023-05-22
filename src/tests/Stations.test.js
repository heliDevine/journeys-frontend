import React from 'react';
import { render } from '@testing-library/react';
import Stations from '.././components/Stations';

describe('Stations', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Stations />);

    expect(asFragment(<Stations />)).toMatchSnapshot();
  });
});
