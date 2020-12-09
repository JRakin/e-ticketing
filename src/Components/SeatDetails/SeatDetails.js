import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import SeatArrangement from '../SeatArrangement/SeatArrangement';

const SeatDetails = ({ bus, handleClose }) => {
  return (
    <div className="container text-center">
      <button className="btn btn-danger my-4" onClick={handleClose}>
        X
      </button>
      <div>
        <ul
          style={{ listStyleType: 'none' }}
          className="d-flex justify-content-between"
        >
          <li style={{ color: '#f6abb6' }}>
            {' '}
            <FontAwesomeIcon icon={faCouch} /> BOOKED (M)
          </li>
          <li style={{ color: '#eec9d2' }}>
            <FontAwesomeIcon icon={faCouch} /> BOOKED (F)
          </li>
          <li>
            <FontAwesomeIcon icon={faCouch} /> BLOCKED
          </li>
          <li style={{ color: '#b2b2b2' }}>
            <FontAwesomeIcon icon={faCouch} /> AVAILABLE
          </li>
          <li style={{ color: '#7bc043' }}>
            <FontAwesomeIcon icon={faCouch} /> SELECTED
          </li>
          <li style={{ color: '#ee4035' }}>
            <FontAwesomeIcon icon={faCouch} /> SOLD (M)
          </li>
          <li style={{ color: '#fe8a71' }}>
            <FontAwesomeIcon icon={faCouch} /> SOLD (F)
          </li>
        </ul>
      </div>
      <div>
        <SeatArrangement bus={bus}></SeatArrangement>
      </div>
    </div>
  );
};

export default SeatDetails;
