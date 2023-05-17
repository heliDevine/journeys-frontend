import axios from 'axios';
import { useEffect, useState } from 'react';
import JourneyList from './JourneyList';

const Journeys = () => {
  const [journeys, setJourneys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:8080/journeys/')
      .then(res => {
        setJourneys(prevState => [...res.data.content]);
        setIsLoading(false);
        console.log(res.data.content);
        return res.data.content;
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="journey_component">
      {journeys && <JourneyList journeys={journeys} />}
    </div>
  );
};

export default Journeys;
