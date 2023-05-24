import { render, screen } from '@testing-library/react';
import JourneyPopup from '.././components/JourneyPopup';

describe('JourneyPopup', () => {
  const validProps = {
    selectedJourney: {
      departureStationName: 'Test departure station',
      returnStationName: 'Test return station',
      distance: 1000,
      duration: 3000,
    },
    onClose: () => {},
  };
  it('renders correctly', () => {
    const { asFragment } = render(
      <JourneyPopup
        selectedJourney={validProps.selectedJourney}
        onClose={validProps.onClose}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Button renders with correct text', () => {
    render(
      <JourneyPopup
        selectedJourney={validProps.selectedJourney}
        onClose={validProps.onClose}
      />,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
