import { render } from '@testing-library/react';
import StationList from '.././components/StationList';

describe('Stations', () => {
  const validProps = {
    stations: [
      { stationNameEN: 'Test station 1' },
      { stationNameEN: 'Test station 2' },
      { stationNameEN: 'Test station 3' },
    ],
  };
  it('renders correctly', () => {
    const { asFragment } = render(
      <StationList stations={validProps.stations} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
