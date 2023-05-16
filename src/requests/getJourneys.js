import axios from 'axios';

const getJourneys = query => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    let endpoint = 'https://retoolapi.dev/JbM9u2/journeys';

    return axios
      .get(endpoint)
      .then(response => {
        const journeys = response.data;
        console.log(response.data);
        return journeys;
      })
      .catch(error => {
        const { status } = error.response;
        if (status === 404) {
          console.log(' no results', error);
        }
      });
  }
};

export default getJourneys;
