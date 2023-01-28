import "./App.css";
import TripList from "./components/TripList";
import { useState } from "react";

function App() {
  const [showTrips, setShowTrips] = useState(true);
  const [hideTrips, setHideTrips] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide Trips</button>
      {showTrips && <TripList />}

      <button onClick={() => setHideTrips(true)}>Show Trips</button>
      {hideTrips && <TripList />}
    </div>
  );
}

export default App;
