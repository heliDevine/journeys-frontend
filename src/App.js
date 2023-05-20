import Journeys from './components/Journeys';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Stations from './components/Stations';
import JourneyPopup from './components/JourneyPopup';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container" />
        <NavBar />
        <Routes>
          <Route path="journeys" element={<Journeys />} />

          <Route path="stations" element={<Stations />} />
        </Routes>
        <JourneyPopup />
      </div>
    </BrowserRouter>
  );
};

export default App;
