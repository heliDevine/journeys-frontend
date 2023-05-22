import React from 'react';
import { render } from '@testing-library/react';
import StationPopup from '.././components/StationPopup';

describe('StationPopup', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<StationPopup />);

    expect(asFragment(<StationPopup />)).toMatchSnapshot();
  });
});
