import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "./BookingForm";
import TimeSlot from "./TimeSlot";

const Booking = () => {
  const baseURL = "http://localhost:8080";

  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? "0" + day : day;
    month = day < 10 ? "0" + month : month;

    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  const startDate = formatDate(today);
  const endDate = formatDate(today);

  console.log(startDate);
  console.log(endDate);

  const bookingClickHandler = (booking) => {
    setSelectedBooking(booking);
  };

  const visibleClickHandler = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (booking) => {
    bookingClickHandler(booking);
    if (!isVisible) visibleClickHandler();
  };

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
          <TimeSlot handleClick={handleClick} booking={booking} />
        ))}
        <BookingForm
          selectedBooking={selectedBooking}
          isVisible={isVisible}
          visibleClickHandler={visibleClickHandler}
        />
      </div>
    </div>
  );
};

export default Booking;
