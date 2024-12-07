import React from "react";

const BookingForm = (props) => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [guest, setGuest] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
    // Dispatch the selected date to the Redux store
    // This could be done by calling an action creator or by using the Redux-thunk middleware
    // The chosen date should be passed as a payload to the action creator
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Select Date</label>
              <input
                type="date"
                value={date}
                id="book-date"
                onChange={(e) => handleChange(e.target.value)}
                name="booking-date"
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Select Time</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">select Time</option>
                {props.availableTime.availableTime.map((availableTime) => {
                  return <option key={availableTime}>{availableTime} </option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guest">Number of Guests</label>
              <input
                type="number"
                min="1"
                value={guest}
                id="book-guest"
                onChange={(e) => setGuest(e.target.value)}
                name="booking-guest"
                required
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                value={occasion}
                key={occasion}
                id="book-occasion"
                onChange={(e) => setOccasion(e.target.value)}
                name="booking-occasion"
                required
              >
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Family Event">Family Event</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                aria-label="on Click"
                type="submit"
                value={"Book Your Table"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
