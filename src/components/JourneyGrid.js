const JourneyGrid = () => {
  const handleClick = e => {
    console.log('This button will show all journeys', e.target);
  };

  return (
    <div className="journey_grid_container">
      <button className="journey_grid_button" onClick={e => handleClick(e)}>
        Show journeys
      </button>
      <h2>Journey data will appear here paginated in grid </h2>
    </div>
  );
};

export default JourneyGrid;
