import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../util/constants";

const TimeSlot = ({ booking }) => {
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = useState(false);

  useEffect
    (() => {
      console.log('a slot has been re-rendered')
    },
    [booking.booked]);

  const handleClick = () => {
    navigate("/bookingform/" + booking.id);
  };
  
  
  const getBookings = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/booking/details/${booking.id}}`
      );
      if (response.status === 200) {
        setIsBooked(response.status);
        console.log(isBooked);
      }
    } catch (error) {
      console.error("Error fetching booking list:", error);
    }
  };

  return (
    <>
      <div className="card mb-4 col-md-3">
        <div className="card-body">
          <p className="card-text">DateTime: {booking.dateTime}</p>
        </div>
        <div className="d-grid card-footer">
          <button
            type="button"
            className={`btn btn-${isBooked ? "danger" : "success"}`}
            onClick={handleClick}
            disabled={booking.booked}
          >
            {isBooked ? "Booked" : "Available"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TimeSlot;
