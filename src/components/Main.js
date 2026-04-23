import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    const date = new Date(action.date);
    return window.fetchAPI(date);
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  function submitForm(formData) {
    if (window.submitAPI(formData)) {
      navigate("/booking-confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
