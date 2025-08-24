// src/__tests__/updateTimes.test.js
import { updateTimes } from "../utils"; // adjust path if needed
import { fetchAPI } from "../api";

jest.mock("../api"); // Mock the API

describe("updateTimes", () => {
  it("dispatches updated times for the selected date", () => {
    const selectedDate = new Date("2025-08-25");
    const dispatch = jest.fn();

    fetchAPI.mockReturnValue(["18:00", "19:00"]); // Mock API response

    updateTimes(dispatch, selectedDate);

    expect(dispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: ["18:00", "19:00"],
    });
  });
});
