import React from 'react';
import { render } from '@testing-library/react';
import JourneyList from '.././components/JourneyList';

describe('JourneyList', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<JourneyList />);

    expect(asFragment(<JourneyList />)).toMatchSnapshot();
  });
});
