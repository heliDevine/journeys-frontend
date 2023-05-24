import PropTypes from 'prop-types';

export const StationPopup = ({ selectedStation, onClose }) => {
  const totalDistance = selectedStation.totalJourneyDistanceFromStation;
  const displayDistance = isNaN(totalDistance)
    ? 'No total distance calculated'
    : `${(totalDistance / 1000).toFixed(0)} kilometers`;
  const emissionsSaved = isNaN(totalDistance)
    ? ''
    : `${(((totalDistance / 1000) * 107.5) / 1000).toFixed(0)}kg`;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h3>{selectedStation.stationNameEN}</h3>
        <p>
          In total {selectedStation.totalDepartingJourneys} journeys departed
          from {selectedStation.stationNameEN} in May 2021. That's{' '}
          {displayDistance} cycled and {emissionsSaved} less CO2 emissions
          compared to driving same distance by an average car.
        </p>
        <button className="popup-close-button" onClick={onClose}>
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
