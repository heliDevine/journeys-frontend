import React from 'react';

function JourneyDetails({ distance, duration }) {
  return (
    <div className="journey_details">
      <p>
        {distance / 1000} kilometers and lasted{' '}
        {Math.floor(duration / 60).toFixed(1)} minutes and {duration % 60}{' '}
        seconds
      </p>
      <p>
        CO2 emissions saved by taking this journey by bike was{' '}
        {((distance / 1000) * 107.5).toFixed(0)}gCO2
      </p>
    </div>
  );
}

export default JourneyDetails;
