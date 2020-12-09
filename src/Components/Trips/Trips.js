import React from 'react';
import TripDetails from '../TripDetails/TripDetails';

const Trips = ({ busData }) => {
  return (
    <div className="container">
      {busData.map((bus) => (
        <TripDetails bus={bus} key={bus.id}></TripDetails>
      ))}
    </div>
  );
};

export default Trips;
