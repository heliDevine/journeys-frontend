import { useState } from 'react';
import StationPopup from './StationPopup';
import PropTypes from 'prop-types';

const StationList = ({ stations }) => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleStationSelect = station => {
    setSelectedStation(station);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedStation(null);
    setShowPopup(false);
  };

  return (
    <div className="station_grid_container">
      {stations.map(station => (
        <div className="station-summary" key={station.id}>
          <div className="station-text">
            {station.stationNameEN} {'   |   '}
            {station.stationAddressFI}
            {'   |   '} bike capacity: {station.stationCapacity}
            <button
              className="info-button"
              type="button"
              onClick={() => handleStationSelect(station)}
            >
              {station.stationNameEN}
            </button>
          </div>
        </div>
      ))}
      {showPopup && selectedStation && (
        <StationPopup
          selectedStation={selectedStation}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default StationList;

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      stationNameEN: PropTypes.string.isRequired,
      stationAddressFI: PropTypes.string.isRequired,
      stationCapacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
