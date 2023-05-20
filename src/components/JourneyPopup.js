import React from 'react';

const JourneyPopup = ({ selectedJourney, showPopup }) => {
  if (!showPopup || !selectedJourney) {
    return null;
  }

  return (
    <div className="popup">
      <h2>Journey Details</h2>
      <p>Distance: {selectedJourney.distance} meters</p>
      <p>
        CO2 Emissions Saved: {(selectedJourney.distance * 107.5) / 1000} gCO2
      </p>
    </div>
  );
};

export default JourneyPopup;
