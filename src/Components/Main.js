import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api'; // make sure api.js is in src/
import './Main.css';

const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Fetch available times whenever date changes
  useEffect(() => {
    if (formData.date) {
      const times = fetchAPI(new Date(formData.date));
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      alert('Please fill in all required fields.');
      return;
    }

    // Submit reservation using API
    const success = submitAPI(formData);

    if (success) {
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
        });
        setAvailableTimes([]);
        setSubmitted(false);
      }, 5000);
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="container main-section" id="reserve">
      <section className="reservation-section">
        <h1>Reserve Your Table</h1>
        <p>Experience Little Lemon with delicious food and a perfect setting. Book your table now!</p>
        <form className="reservation-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

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
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="time">Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select time</option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests *</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7+">7+ Guests</option>
            </select>
          </div>

          <button type="submit" className="btn-primary" disabled={submitted}>
            {submitted ? 'Reserved!' : 'Reserve Now'}
          </button>
        </form>

        {submitted && (
          <div className="confirmation-message" role="alert" aria-live="polite">
            Thank you for your reservation! We look forward to welcoming you.
          </div>
        )}
      </section>
    </main>
  );
};

export default Main;
