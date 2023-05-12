const JourneyGrid = () => {
  let station = 'Rautatien Tori';
  const handleClick = () => {
    station = 'Kallio';
  };

  return (
    <div className="journey_grid_container">
      <p>{station}</p>
      <button
        type="submit"
        className="journey_grid_button"
        onClick={e => handleClick(e)}
      >
        Show journeys
      </button>
      <h2>Journey data will appear here paginated in grid </h2>
    </div>
  );
};

export default JourneyGrid;
