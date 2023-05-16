const JourneyList = ({ journeys }) => {
  return (
    <div className="journey_grid_container">
      {journeys.map(journey => (
        <div className="journey-summary" key={journey.id}>
          <p className="journey-text">
            Journey form {journey.departureStationName} to{' '}
            {journey.returnStationName} was {journey.distance / 1000} kilometres
            and lasted {Math.floor(journey.duration / 60)} minutes and{' '}
            {journey.duration % 60} seconds
          </p>
        </div>
      ))}
    </div>
  );
};

export default JourneyList;
