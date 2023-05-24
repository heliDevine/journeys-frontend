import { render } from '@testing-library/react';
import StationList from '.././components/StationList';

describe('Stations', () => {
  const validProps = {
    stations: [
      {
        stationNameEN: 'Test station 1',
        stationAddressFI: 'Test address1',
        stationCapacity: 4,
      },
      {
        stationNameEN: 'Test station 2',
        stationAddressFI: 'Test address2',
        stationCapacity: 5,
      },
      {
        stationNameEN: 'Test station 3',
        stationAddressFI: 'Test address3',
        stationCapacity: 6,
      },
    ],
  };
  it('renders correctly', () => {
    const { asFragment } = render(
      <StationList stations={validProps.stations} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
