import React, { useState } from 'react';
import moment from 'moment';
import JourneyPopup from './JourneyPopup';

const JourneyList = ({ journeys }) => {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleJourneySelect = journey => {
    setSelectedJourney(journey);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedJourney(null);
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
              className="info-button"
              type="button"
              onClick={() => handleJourneySelect(journey)}
            >
              More Info
            </button>
          </div>
        </div>
      ))}
      {showPopup && selectedJourney && (
        <JourneyPopup
          selectedJourney={selectedJourney}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default JourneyList;
