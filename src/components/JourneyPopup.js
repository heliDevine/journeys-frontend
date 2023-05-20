import React from 'react';

const JourneyPopup = ({ selectedJourney, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>GREEN HELSINKI</h2>
        <p>
          {(selectedJourney.distance / 1000).toFixed(1)} kilometers and lasted{' '}
          {Math.floor(selectedJourney.duration / 60)} minutes and{' '}
          {selectedJourney.duration % 60} seconds
        </p>
        <p>
          CO2 emissions saved by taking this journey by bike was{' '}
          {((selectedJourney.distance / 1000) * 107.5).toFixed(0)}gCO2
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default JourneyPopup;
