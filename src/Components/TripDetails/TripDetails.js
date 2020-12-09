import React, { useState } from 'react';
import SeatDetails from '../SeatDetails/SeatDetails';
import './TripDetails.css';

const TripDetails = (props) => {
  const [seatView, setSeatView] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleSeatView = () => {
    setIsClose(false);
    setSeatView(true);
  };

  const handleClose = () => {
    setIsClose(true);
  };

  const bus = props.bus;
  return (
    <div className="container">
      <div className="d-flex p-3 bus-details">
        <div className="mx-auto my-auto">
          <h4 className="text-danger">{bus.name.toUpperCase()}</h4>
          <p>
            {bus.id} {bus.busType}
          </p>
          <p>
            Starting Point:{' '}
            <small className="text-danger">
              {bus.startingPoint.toUpperCase()}
            </small>
          </p>
          <p>
            End Point:{' '}
            <small className="text-danger">{bus.endpoint.toUpperCase()}</small>
          </p>
        </div>
        <div className="mx-auto my-auto">
          <h5>Departure Time</h5>
          <p className="text-danger">{bus.departureTime}</p>
        </div>
        <div className="mx-auto my-auto">
          <h5>Arrival Time</h5>
          <p className="text-danger">{bus.arrivalTime}</p>
        </div>
        <div className="mx-auto my-auto">
          <h5>Seats Available</h5>
        </div>
        <div className="mx-auto my-auto d-flex justify-content-between">
          <h4 className="text-danger">&#2547;{bus.seatFair}</h4>
        </div>
        <div className="mx-auto my-auto">
          <button onClick={handleSeatView} className="btn search-btn">
            View Seats
          </button>
        </div>
      </div>
      <div>
        {seatView && !isClose && (
          <SeatDetails
            bus={bus}
            key={bus.id}
            handleClose={handleClose}
          ></SeatDetails>
        )}
      </div>
    </div>
  );
};

export default TripDetails;
