import React, { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const baseURL = "http://localhost:8080";
  const startDate = "2023-12-12";
  const endDate = "2023-12-12";

  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  //   const getBookings = async () => {
  //     await axios
  //       .get(`${baseURL}/api/v1/booking/from/${startDate}/to/${endDate}`)
  //       .then((response) => {
  //         console.log("RESPONSE:", response);
  //         if (response.status === 200) {
  //           console.log("DATA:", response.data);
  //           setBookings(response.data);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("ERROR:", error);
  //       });

  const getBookings = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/booking/from/${startDate}/to/${endDate}`
      );
      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const bookingClickHandler = (booking) => {
    setSelectedBooking(booking);
  };

  useEffect(() => {
    getBookings();
  }, []);



  return (
    <div>
      {/* <button type='button' className='btn btn-info' onClick={getBookingsClickHandler}>
            Click here to get all time slots
        </button> */}
      <div className="row">
        {bookings && bookings.length !== 0 && (
          <h2 className="mb-4">Booking List</h2>
        )}
        <div className="row"></div>
        {bookings.map((booking) => (
          <div key={booking.id} className="card mb-4 col-md-3">
            <div className="card-body">
              <p className="card-text">DateTime: {booking.dateTime}</p>
            </div>
            <div className="d-grid card-footer">
              <button
                type="button"
                className={`btn btn-${booking.booked ? "danger" : "success"}`}
                onClick={() => bookingClickHandler(booking)}
                disabled={booking.booked}
              >
                {booking.booked ? "Booked" : "Available"}
              </button>
            </div>
          </div>
        ))}

        <div className="card">
          <h3>Booking</h3>
          <div class="mb-3 mt-3">
            <label for="email" class="form-label">
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <div className="card mx-5 my-3">Booking Details</div>
          {selectedBooking ? (
            <>
              <div>ID: {selectedBooking.id}</div>
              <div>Date: {selectedBooking.dateTime}</div>
              <div>Time: {selectedBooking.dateTime}</div>
            </>
          ) : (
            <div>No booking selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
