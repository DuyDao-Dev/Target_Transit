import BusRoutes from '../BusRoutes/BusRoutes';
import './App.css';
import BusDirection from '../BusDirection/BusDirection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Target Transit
      </header>
      <BusRoutes />
      <BusDirection />
    </div>
  );
}

export default App;
