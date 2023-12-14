import React from "react";

const TimeSlot = ( { handleClick, booking } ) => {
  return (
    <div>
      <div key={booking.id} className="card mb-4 col-md-3">
        <div className="card-body">
          <p className="card-text">DateTime: {booking.dateTime}</p>
        </div>
        <div className="d-grid card-footer">
          <button
            type="button"
            className={`btn btn-${booking.booked ? "danger" : "success"}`}
            onClick={() => handleClick(booking)}
            disabled={booking.booked}
          >
            {booking.booked ? "Booked" : "Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
