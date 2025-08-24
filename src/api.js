// src/api.js

// Mock function to fetch available reservation times
export const fetchAPI = (date) => {
    // Example: return an array of times based on the date
    // In real API, this would depend on booked slots
    const hours = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
    return hours;
  };

  // Mock function to submit booking form data
  export const submitAPI = (formData) => {
    console.log('Submitting booking:', formData);
    // Returns true if submission was successful
    return true;
  };
