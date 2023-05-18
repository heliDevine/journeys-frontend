import React from 'react';

function JourneyDetails({ distance, duration }) {
  return (
    <div className="journey_details">
      <p>
        {distance / 1000} kilometers and lasted {Math.floor(duration / 60)}{' '}
        minutes and {duration % 60} seconds
      </p>
      <p>
        CO2 emissions saved by taking this journey by bike was{' '}
        {(distance / 1000) * 107.5}gCO2
      </p>
      JourneyDetails
    </div>
  );
}

export default JourneyDetails;
