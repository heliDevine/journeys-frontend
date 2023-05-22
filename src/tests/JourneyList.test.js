import React from 'react';
import { render } from '@testing-library/react';
import JourneyList from '.././components/JourneyList';

describe('JourneyList', () => {
  const validProps = {
    journeys: [
      {
        departureTime: 'testTime',
        departureStationName: 'testName',
        returnStationName: 'TestName2',
        distance: 300,
        duration: 200,
      },
    ],
  };
  it('renders correctly', () => {
    const { asFragment } = render(
      <JourneyList journeys={validProps.journeys} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
