import React from "react";

function TripList() {
    fetch('http://localhost:3000/trips')
        .then(response => response.json())
    .then(json => conslole.log(json))
  return (
    <div>
      <h2>Trips</h2>
    </div>
  );
}

export default TripList;
