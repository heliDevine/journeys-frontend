import moment from 'moment';
import JourneyDetails from './JourneyDetails';

const JourneyList = ({ journeys, onJourneySelect }) => {
  return (
    <div className="journey_grid_container">
      {journeys.map(journey => (
        <div className="journey-summary" key={journey.id}>
          <div className="journey-text">
            Journey on {moment(journey.departureTime).format('ddd Do MMM YYYY')}{' '}
            at {moment(journey.departureTime).format('HH:mm')} form{' '}
            {journey.departureStationName} to {journey.returnStationName} was{' '}
            <JourneyDetails
              key={journey.id}
              distance={journey.distance}
              duration={journey.duration}
              onJourneySelect={onJourneySelect}
            />
          </div>
          <button
            className="details-button"
            type="button"
            onClick={() => onJourneySelect(journey)}
          >
            more details
          </button>
        </div>
      ))}
    </div>
  );
};

export default JourneyList;
