import PropTypes from 'prop-types';

const JourneyPopup = ({ selectedJourney, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>
          Journey from {selectedJourney.departureStationName} to{' '}
          {selectedJourney.returnStationName} was{' '}
          {(selectedJourney.distance / 1000).toFixed(1)} kilometers, lasted{' '}
          {Math.floor(selectedJourney.duration / 60)} minutes and{' '}
          {selectedJourney.duration % 60} seconds. That's{' '}
          {((selectedJourney.distance / 1000) * 107.5).toFixed(0)}g less CO2
          emissions compared to driving same distance by an average car.
        </p>
        <button className="popup-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default JourneyPopup;

JourneyPopup.propTypes = {
  selectedJourney: PropTypes.shape({
    departureStationName: PropTypes.string.isRequired,
    returnStationName: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
