import { initializeTimes, updateTimes } from "./components/Main";

test("initializeTimes returns 6 time slots including 17:00 and 22:00", () => {
  const times = initializeTimes();
  expect(times).toHaveLength(6);
  expect(times).toContain("17:00");
  expect(times).toContain("22:00");
});

test("updateTimes returns the same state unchanged", () => {
  const fakeState = ["17:00", "18:00"];
  const result = updateTimes(fakeState, { type: "UPDATE_TIMES", date: "2025-06-15" });
  expect(result).toEqual(fakeState);
});
