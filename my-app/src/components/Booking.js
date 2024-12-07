import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTime, dispatch, submitForm }) => {
  return (
    <BookingForm
      availableTime={availableTime} // Ensure this prop is passed
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

export default Booking;
