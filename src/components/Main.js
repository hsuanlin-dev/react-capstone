import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const FALLBACK_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function initializeTimes() {
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date());
  }
  return FALLBACK_TIMES;
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES" && typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date(action.date));
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  function submitForm(formData) {
    if (typeof window.submitAPI === "function") {
      if (window.submitAPI(formData)) {
        navigate("/booking-confirmed");
      }
    } else {
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
