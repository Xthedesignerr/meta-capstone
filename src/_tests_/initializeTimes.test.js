// src/__tests__/initializeTimes.test.js
import { initializeTimes } from "../utils"; // adjust path if needed
import { fetchAPI } from "../api";

jest.mock("../api"); // Mock the API

describe("initializeTimes", () => {
  it("returns a non-empty array of available times", () => {
    // Mock fetchAPI to return a sample array
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

    const times = initializeTimes();
    
    expect(times.length).toBeGreaterThan(0);
    expect(times).toContain("17:00");
  });
});
