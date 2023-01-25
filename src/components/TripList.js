import React, { useState, useEffect } from "react";
import "./TripList.css";

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));

    //   return () => {
    //     second
    //   }
  }, []);

  return (
    <div>
      <h2>Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
