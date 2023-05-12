import JourneyGrid from './components/JourneyGrid';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container" />
      <h1>Journeys App</h1>

      <JourneyGrid />
    </div>
  );
};

export default App;
