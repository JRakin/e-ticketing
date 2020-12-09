import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import Steering from '../../Assets/car-steering-wheel.png';
import './SeatArrangement.css';

const SeatArrangement = ({ bus }) => {
  let [countSeat, setCountSeat] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const chooseSeat = (e, data) => {
    let isIncluded = selectedItems.includes(data);

    if (isIncluded) {
      e.target.classList.remove('selected-items');
      const index = selectedItems.indexOf(data);
      selectedItems.splice(index, 1);
      setSelectedItems([...selectedItems]);
    } else {
      selectedItems.push(data);
      setSelectedItems([...selectedItems]);
      setCountSeat(countSeat++);
      e.target.classList.add('selected-items');
    }
    handleAutoDelete(e, data);
  };

  if (selectedItems.length) {
    var seatFair = bus.seatFair * selectedItems.length;
  }
  let serviceCharge = (5 * bus.seatFair) / 100;

  const handleAutoDelete = (e, data) => {
    setTimeout(() => {
      e.target.classList.remove('selected-items');
      let index = selectedItems.indexOf(data);
      selectedItems.splice(index, 1);
      setSelectedItems([]);
    }, 100000);
  };

  console.log(selectedItems);
  return (
    <div className="row">
      <div className="col-md-6 seat-container">
        <p className="p-5">
          {' '}
          <img
            style={{ width: '20px', float: 'right' }}
            src={Steering}
            alt=""
          />{' '}
        </p>
        <div>
          <ul style={{ float: 'right', listStyleType: 'none', padding: '4px' }}>
            <li>
              <p
                title="A1"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a1')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A2"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a2')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A3"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a3')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A4"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a4')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A5"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a5')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A6"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a6')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A7"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a7')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="A8"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'a8')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
          </ul>
          <ul style={{ float: 'right', listStyleType: 'none', padding: '4px' }}>
            <li>
              <p
                title="B1"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b1')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B2"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'B2')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B3"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b3')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B4"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b4')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B5"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b5')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B6"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b6')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B7"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b7')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="B8"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'b8')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
          </ul>
          <ul style={{ float: 'right', listStyleType: 'none', padding: '4px' }}>
            <li>
              <p
                title="C1"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c1')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C2"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c2')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C3"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c3')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C4"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c4')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C5"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c5')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C6"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat('c6')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C7"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c7')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="C8"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'c8')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
          </ul>
          <ul style={{ float: 'right', listStyleType: 'none', padding: '4px' }}>
            <li>
              <p
                title="D1"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd1')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D2"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd2')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D3"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd3')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D4"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd4')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D5"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd5')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D6"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd6')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D7"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd7')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
            <li>
              <p
                title="D8"
                data-toggle="tooltip"
                data-placement="top"
                onClick={(e) => chooseSeat(e, 'd8')}
              >
                <FontAwesomeIcon icon={faCouch} />
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 p-4">
        <div className="p-4">
          <h5>Sub Total: {seatFair}</h5>
          <h5>Service Charge: {serviceCharge * selectedItems.length}</h5>
          <h5>
            Grand Total: {seatFair + serviceCharge * selectedItems.length}
          </h5>

          <div>
            {selectedItems.length ? (
              <button className="btn search-btn">Proceed</button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatArrangement;
