import { render, screen } from '@testing-library/react';
import StationPopup from '.././components/StationPopup';

describe('StationPopup', () => {
  const validProps = {
    selectedStation: {
      stationNameEN: 'Test station',
      totalDepartingJourneys: 1000,
    },
    onClose: () => {},
  };
  it('renders correctly', () => {
    const { asFragment } = render(
      <StationPopup
        selectedStation={validProps.selectedStation}
        onClose={validProps.onClose}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('checks that button is in the document', () => {
    render(
      <StationPopup
        selectedStation={validProps.selectedStation}
        onClose={validProps.onClose}
      />,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
