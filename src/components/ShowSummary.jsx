
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TicketBookingForm from './TicketBookingForm';
import './styles.css'; 

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-summary-container">
      <h1>{show.name}</h1>
      <div className="summary-content" dangerouslySetInnerHTML={{ __html: show.summary }} />

      <div className="additional-details">
        <h2>Additional Details</h2>
        <ul>
          <li>
            <strong>Genres:</strong> {show.genres.join(', ')}
          </li>
          <li>
            <strong>Language:</strong> {show.language}
          </li>
          <li>
            <strong>Premiered:</strong> {show.premiered}
          </li>
          <li>
            <strong>Runtime:</strong> {show.runtime} minutes
          </li>
        </ul>
      </div>

      <TicketBookingForm show={show} />
      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </div>
  );
};

export default ShowSummary;
