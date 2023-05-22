import PropTypes from 'prop-types';

const JourneyPopup = ({ selectedJourney, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Change this title</h2>
        <p>
          {(selectedJourney.distance / 1000).toFixed(1)} kilometers and lasted{' '}
          {Math.floor(selectedJourney.duration / 60)} minutes and{' '}
          {selectedJourney.duration % 60} seconds
        </p>
        <p>
          CO2 emissions saved by taking this journey by bike was{' '}
          {((selectedJourney.distance / 1000) * 107.5).toFixed(0)}gCO2
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
    distance: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
