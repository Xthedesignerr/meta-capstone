import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (formData.date) {
      const times = fetchAPI(new Date(formData.date));
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date]);

  // ✅ Validation logic
  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = "Full name is required.";
    } else if (data.name.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (data.phone && !/^[0-9]{10,15}$/.test(data.phone)) {
      errors.phone = "Phone number must be 10–15 digits.";
    }

    if (!data.date) {
      errors.date = "Date is required.";
    }

    if (!data.time) {
      errors.time = "Please select a time.";
    }

    if (!data.guests) {
      errors.guests = "Number of guests is required.";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // Live validation
    setValidationErrors(validateForm(updatedForm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Stop submission if errors exist
    }

    const success = submitAPI(formData);

    if (success) {
      setSubmitted(true);
      navigate("/confirmed");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const isFormValid =
    Object.keys(validationErrors).length === 0 &&
    formData.name &&
    formData.email &&
    formData.date &&
    formData.time &&
    formData.guests;

  return (
    <main className="main-section">
      <section className="reservation-section">
        <h1>Reserve Your Table</h1>
        <p>Book your spot at Little Lemon!</p>

        {/* ✅ Form-level instructions */}
        <p id="formInstructions">Fields marked with * are required.</p>

        <form
          className="reservation-form"
          onSubmit={handleSubmit}
          noValidate
          aria-describedby="formInstructions"
        >
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              aria-invalid={!!validationErrors.name}
              aria-describedby={validationErrors.name ? "nameError" : undefined}
            />
            {validationErrors.name && (
              <small id="nameError" className="error">
                {validationErrors.name}
              </small>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="\S+@\S+\.\S+"
              aria-invalid={!!validationErrors.email}
              aria-describedby={validationErrors.email ? "emailError" : undefined}
            />
            {validationErrors.email && (
              <small id="emailError" className="error">
                {validationErrors.email}
              </small>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10,15}"
              aria-invalid={!!validationErrors.phone}
              aria-describedby={validationErrors.phone ? "phoneError" : undefined}
            />
            {validationErrors.phone && (
              <small id="phoneError" className="error">
                {validationErrors.phone}
              </small>
            )}
          </div>

          {/* Date & Time */}
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="date">Date *</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                aria-invalid={!!validationErrors.date}
                aria-describedby={validationErrors.date ? "dateError" : undefined}
              />
              {validationErrors.date && (
                <small id="dateError" className="error">
                  {validationErrors.date}
                </small>
              )}
            </div>

            <div className="form-group half-width">
              <label htmlFor="time">Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                aria-label="Select a reservation time"
                aria-invalid={!!validationErrors.time}
                aria-describedby={validationErrors.time ? "timeError" : undefined}
              >
                <option value="" disabled>
                  Select time
                </option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {validationErrors.time && (
                <small id="timeError" className="error">
                  {validationErrors.time}
                </small>
              )}
            </div>
          </div>

          {/* Guests */}
          <div className="form-group">
            <label htmlFor="guests">Guests *</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              aria-label="Select number of guests"
              aria-invalid={!!validationErrors.guests}
              aria-describedby={validationErrors.guests ? "guestsError" : undefined}
            >
              <option value="" disabled>
                Select guests
              </option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7+">7+ Guests</option>
            </select>
            {validationErrors.guests && (
              <small id="guestsError" className="error">
                {validationErrors.guests}
              </small>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-primary"
            disabled={!isFormValid || submitted}
            aria-label="Reserve a table"
          >
            {submitted ? "Reserved!" : "Reserve Now"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Main;
