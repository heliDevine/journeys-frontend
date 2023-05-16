import axios from 'axios';
import { useEffect, useState } from 'react';
import JourneyList from './JourneyList';

const Journeys = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const axiosJourneys = async () => {
      const response = await axios.get('https://retoolapi.dev/JbM9u2/journeys');
      setJourneys(response.data);
    };
    axiosJourneys();
  }, []);

  return (
    <div className="journey_component">
      {journeys && <JourneyList journeys={journeys} />}
    </div>
  );
};

export default Journeys;
