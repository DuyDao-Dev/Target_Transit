import './App.css';
import BusRoutes from '../BusRoutes/BusRoutes';
import BusDirection from '../BusDirection/BusDirection';
import BusStops from '../DisplayStops/DisplayStops';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Target Transit
      </header>
      <BusRoutes />
      <BusDirection />
      <BusStops />
    </div>
  );
}

export default App;
