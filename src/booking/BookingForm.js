import React, { useEffect, useState } from "react";

const BookingForm = ({ selectedBooking, isVisible, visibleClickHandler }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const emailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (isValid) setIsEmailValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.elements.email.value);
    emailValidation();
    if (isEmailValid) {
      // /api/v1/booking/book/{id}/{email}
      // change available to red booked
      visibleClickHandler();
    }
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
            <form onSubmit={submitHandler}>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
              {/* <div>{emailValidation ? "" : "Email is invalid"}</div> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
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
