import axios from 'axios';
import { useEffect, useState } from 'react';
import StationList from './StationList';

const Stations = () => {
  const [stations, setStations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/stations/?pageNo=${page}`)
      .then(res => {
        setStations(prevState => [...res.data.content]);
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
    <div className="station_component">
      {stations && <StationList stations={stations} />}
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
            <p className="page_number">
              {page + 1}/{lastPage}
            </p>
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

export default Stations;
