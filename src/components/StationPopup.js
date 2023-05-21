import React from 'react';

export const StationPopup = ({ selectedStaion, onClose }) => {
  const totalDistance = selectedStaion.totalJourneyDistanceFromStation;

  if (totalDistance <= 0) {
    return 'no journeys done';
  } else
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>GREEN HELSINKI</h2>
          <p>{(totalDistance / 1000).toFixed(1)} kilometers</p>
          <p>
            CO2 emissions saved {((totalDistance / 1000) * 107.5).toFixed(0)}
            gCO2
          </p>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
};
