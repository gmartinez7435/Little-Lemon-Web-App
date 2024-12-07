import React from "react";

const BookingForm = (props) => {
  const [date, setDate] = React.useState("");
  const [times, setTimes] = React.useState("");
  const [guest, setGuest] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);

  };

  const handleChange = (e) => {
    setDate(e);
    if (typeof dispatch === "function") {
      props.dispatch(e);
    }
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
                value={times}
                onChange={(e) => setTimes(e.target.value)}>
                <option value="">Select Time</option>
                {
                props.availableTimes.availableTimes.map(availableTimes =>
                {return <option key={availableTimes}>{availableTimes}</option>})
                }
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
