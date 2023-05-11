import JourneyGrid from './components/JourneyGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container"></div>
      <h1>Journeys App</h1>

      <JourneyGrid />
    </div>
  );
}

export default App;
