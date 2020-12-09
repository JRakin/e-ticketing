import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { buses } from '../../fakeData/buses';
import { district } from '../../fakeData/district';
import Trips from '../Trips/Trips';
import './SearchBar.css';

const SearchBar = () => {
  const { register, control, handleSubmit } = useForm();

  const [availableTrips, setAvailableTrips] = useState([]);

  const onSubmit = (data) => {
    let newArray = [];
    // eslint-disable-next-line array-callback-return
    let busData = buses.map((bus) => {
      if (
        bus.route.includes(data.cityFrom.value) &&
        bus.route.includes(data.cityTo.value)
      ) {
        newArray.push(bus);
      }
    });

    setAvailableTrips(newArray);
  };

  console.log(availableTrips);

  return (
    <div>
      <div className="p-3 form-container">
        <div className="mx-auto px-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex justify-content-around search-form"
          >
            <div className="form-group w-75 p-4">
              <label htmlFor="cityFrom">FROM</label>
              <Controller
                as={Select}
                name="cityFrom"
                options={district}
                control={control}
                defaultValue=""
                placeholder="Enter City"
                rules={{ required: true }}
              />
            </div>
            <div className="form-group w-75 p-4">
              <label htmlFor="cityTo">TO</label>
              <Controller
                as={Select}
                name="cityTo"
                options={district}
                control={control}
                defaultValue=""
                placeholder="Enter City"
                rules={{ required: true }}
              />
            </div>
            <div className="form-group w-75 p-4">
              <label htmlFor="">JOURNEY DATE</label>
              <input
                style={{
                  padding: '7px 8px',
                  borderRadius: '4px',
                  border: 'none',
                }}
                name="departure"
                ref={register({ required: true })}
                type="date"
              ></input>
            </div>
            <div className="form-group w-75 p-4">
              <label htmlFor="">RETURN DATE (optional)</label>
              <input
                style={{
                  padding: '7px 8px',
                  borderRadius: '4px',
                  border: 'none',
                }}
                name="returnDate"
                ref={register}
                type="date"
              ></input>
            </div>
            <div className="form-group w-75 p-5 my-auto">
              <input className="search-btn" type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <Trips busData={availableTrips}></Trips>
      </div>
    </div>
  );
};

export default SearchBar;
