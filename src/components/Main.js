import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

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

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;
