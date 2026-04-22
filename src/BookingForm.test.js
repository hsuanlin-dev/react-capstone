import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders Choose date label", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />);
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});
