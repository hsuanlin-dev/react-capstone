import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid = () => {
    return date !== "" && time !== "" && guests >= 1 && guests <= 10 && occasion !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        required
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">-- Select a time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        required
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid()}
      />
    </form>
  );
}

export default BookingForm;
