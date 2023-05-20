import moment from 'moment';
import JourneyDetails from './JourneyDetails';
import { useState } from 'react';

const JourneyList = ({ journeys }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState(null);

  const handleJourneySelect = journey => {
    setSelectedJourney(journey);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="journey_grid_container">
      {journeys.map(journey => (
        <div className="journey-summary" key={journey.id}>
          <div className="journey-text">
            Journey on {moment(journey.departureTime).format('ddd Do MMM YYYY')}{' '}
            at {moment(journey.departureTime).format('HH:mm')} from{' '}
            {journey.departureStationName} to {journey.returnStationName} was{' '}
            <button
              className="details-button"
              type="button"
              onClick={() => handleJourneySelect(journey)}
            >
              More Info
            </button>
          </div>
        </div>
      ))}
      {showPopup && (
        <JourneyDetails
          distance={selectedJourney.distance}
          duration={selectedJourney.duration}
          handlePopupClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default JourneyList;
