// TicketBookingForm.js
import React, { useState } from 'react';
import './styles.css'; // Import your custom styles

const TicketBookingForm = ({ show }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = () => {
    const bookingDetails = {
      movieName: show.name,
      userName,
      email,
    };

    // Store user information in local storage
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    // Clear the form
    setUserName('');
    setEmail('');

    // Show an alert
    alert('Movie Ticket Booked!');

    console.log('Movie Ticket Booked:', bookingDetails);
  };

  return (
    <div className="booking-form-container">
      <h2>Movie Ticket Booking</h2>
      <p>Movie: {show.name}</p>
      <div className="form-group">
        <label>Your Name:</label>
        <input
          type="text"
          className="form-control"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
};

export default TicketBookingForm;
