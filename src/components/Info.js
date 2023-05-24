const Welcome = () => {
  return (
    <div className="welcome-container">
      <h2>Welcome to Journeys</h2>
      <p>
        This application uses data from journeys made with city bikes in the
        Helsinki Capital area in May 2021. It calculates saved CO2 emissions for
        a single journey compared to same distance travelled by an average car.
        On station view the emissions saving is based on total journey distance
        started from the station.
      </p>
      <a href="https://www.eea.europa.eu/ims/co2-performance-of-new-passenger">
        The calculation is based on European Environment Agency's research
      </a>
      <p>
        Average emission for new passenger cars is 107.5 gCO2/km. On this
        application this figure is used for illustrative purpose only.
      </p>
      <a href="https://www.hsl.fi/en/citybikes">
        Find out more about Helsinki City Bikes
      </a>
    </div>
  );
};

export default Welcome;
