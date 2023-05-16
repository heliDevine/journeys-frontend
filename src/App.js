import Journeys from './components/Journeys';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container" />
      <h1>Journeys App</h1>

      <Journeys />
    </div>
  );
};

export default App;
