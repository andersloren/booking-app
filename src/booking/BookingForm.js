import React, { useState } from "react";

const BookingForm = ( { selectedBooking, isVisible, visibleClickHandler } ) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    console.log("handleEmailChange start");
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const isValid = emailRegex.test(event.target.value);
    if (true) {
      setEmail(event.target.value);
      console.log(email);
    } else {
      console.log("Please enter a valid email address");
    }
  };

  const submitHandler = async () => {
    visibleClickHandler();
    console.log("Email has been submitted", email);
  };

  return (
    <div>
      {isVisible && (
        <div className="card">
          <h3>Booking</h3>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
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
      )}
    </div>
  );
};

export default BookingForm;
