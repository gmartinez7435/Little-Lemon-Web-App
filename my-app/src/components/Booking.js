import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <BookingForm
      availableTime={props.availableTime} // Ensure this prop is passed
      dispatch={props.dispatch}
      SubmitForm={props.submitForm}
    />
  );
};

export default Booking;
