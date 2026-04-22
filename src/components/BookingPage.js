import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <h2>Reservations</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
