import Journeys from './components/Journeys';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Stations from './components/Stations';
import Info from './components/Info';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="journeys" element={<Journeys />} />
          <Route path="stations" element={<Stations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
