import React, { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const baseURL = "http://localhost:8080";
  const startDate = "2023-12-12";
  const endDate = "2023-12-12";

  const [bookings, setBookings] = useState([]);



  const getBookingsClickHandler = async () => {
    await axios
      .get(`${baseURL}/api/v1/booking/from/${startDate}/to/${endDate}`)
      .then((response) => {
        console.log("RESPONSE:", response);
        if (response.status === 200) {
          console.log("DATA:", response.data);
          setBookings(response.data);
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

//   useEffect(() => {
// get
//   _}

  return (
    <div>
        <button type='button' className='btn btn-info' onClick={getBookingsClickHandler}>
            Click here to get all time slots
        </button>
      <div className="row"></div>
      {bookings.map((booking) => (
        // <div key={booking.id} className='card mb-4 col-md-3'>
        <div className="container">{booking.id}</div>
        // <div className="container">{booking.dateTime}</div>
        // <div className="container">{booking.booked}</div>
      ))}
    </div>
  );
};

export default Booking;
