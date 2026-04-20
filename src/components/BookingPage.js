import { useState } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage() {
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <section className="booking-page">
      <h2>Reservations</h2>
      <BookingForm availableTimes={availableTimes} />
    </section>
  );
}

export default BookingPage;
