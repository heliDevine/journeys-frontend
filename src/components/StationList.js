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
          <div className="station-text" key={station.name}>
            Station name is {station.stationNameEN}
            <button
              className="info-button"
              type="button"
              onClick={() => handleStationSelect(station)}
            >
              More Info
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
    }),
  ).isRequired,
};
