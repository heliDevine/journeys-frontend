import axios from 'axios';
import { useEffect, useState } from 'react';
import JourneyList from './JourneyList';

const Journeys = () => {
  const [journeys, setJourneys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/journeys/?pageNo=${page}`)
      .then(res => {
        setJourneys(prevState => [...res.data.content]);
        setIsLoading(false);
        setLastPage(res.data.totalPages);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div className="journey_component">
      {journeys && <JourneyList journeys={journeys} />}
      <div className="pagination">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <button
              className="pagination_button"
              disabled={page === 0}
              onClick={() => setPage(prevState => prevState - 1)}
            >
              Prev
            </button>
            <p>{page + 1}</p>
            <button
              className="pagination_button"
              disabled={page === lastPage - 1}
              onClick={() => setPage(prevState => prevState + 1)}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Journeys;
