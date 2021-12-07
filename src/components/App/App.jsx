import './App.css';
import BusRoutes from '../BusRoutes/BusRoutes';
import BusDirection from '../BusDirection/BusDirection';
import BusStops from '../DisplayStops/DisplayStops';
import DisplayAllInfo from '../DisplayAllInfo/DisplayAllInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Target Transit
      </header>
      <BusRoutes />
      <BusDirection />
      <BusStops />
      <DisplayAllInfo />
    </div>
  );
}

export default App;
