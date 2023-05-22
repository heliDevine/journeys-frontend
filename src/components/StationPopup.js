import React from 'react';
import PropTypes from 'prop-types';

export const StationPopup = ({ selectedStation, onClose }) => {
  const totalDistance = selectedStation.totalJourneyDistanceFromStation;
  const displayDistance = isNaN(totalDistance)
    ? 'No total distance calculated'
    : `${(totalDistance / 1000).toFixed(1)} kilometers`;
  const emissionsSaved = isNaN(totalDistance)
    ? ''
    : `${((totalDistance / 1000) * 107.5).toFixed(0)} gCO2`;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>GREEN HELSINKI</h2>
        <p>{displayDistance}</p>
        <p>CO2 emissions saved {emissionsSaved}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StationPopup;

StationPopup.propTypes = {
  selectedStation: PropTypes.shape({
    totalJourneyDistanceFromStation: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
