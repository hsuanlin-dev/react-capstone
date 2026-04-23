import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

beforeEach(() => {
  window.fetchAPI = jest.fn(() => AVAILABLE_TIMES);
  window.submitAPI = jest.fn(() => true);
});

test("renders Choose date label", () => {
  render(<BookingForm availableTimes={AVAILABLE_TIMES} dispatch={jest.fn()} />);
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

test("date input has required attribute", () => {
  render(<BookingForm availableTimes={AVAILABLE_TIMES} dispatch={jest.fn()} />);
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
});

test("guests input has min and max attributes", () => {
  render(<BookingForm availableTimes={AVAILABLE_TIMES} dispatch={jest.fn()} />);
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("submit button is disabled when date is empty", () => {
  render(<BookingForm availableTimes={AVAILABLE_TIMES} dispatch={jest.fn()} />);
  const submitBtn = screen.getByDisplayValue("Make Your Reservation");
  expect(submitBtn).toBeDisabled();
});

test("submit button is enabled after all fields are filled", () => {
  render(<BookingForm availableTimes={AVAILABLE_TIMES} dispatch={jest.fn()} />);
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2025-06-15" } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "2" } });
  fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: "Birthday" } });
  expect(screen.getByDisplayValue("Make Your Reservation")).toBeEnabled();
});
