import { initializeTimes, updateTimes } from "./components/Main";

const MOCK_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

beforeEach(() => {
  window.fetchAPI = jest.fn(() => MOCK_TIMES);
  window.submitAPI = jest.fn(() => true);
});

test("initializeTimes returns a non-empty array", () => {
  const times = initializeTimes();
  expect(times).toBeDefined();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns a non-empty array for UPDATE_TIMES action", () => {
  const result = updateTimes([], { type: "UPDATE_TIMES", date: "2025-06-15" });
  expect(result).toBeDefined();
  expect(result.length).toBeGreaterThan(0);
});
