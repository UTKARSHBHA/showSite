
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>TV Shows List</h1>
      <div className="shows-list">
        {shows.map((show) => (
          <div key={show.show.id} className="show-card">
            <img src={show.show.image ? show.show.image.medium : 'placeholder-image.jpg'} alt={show.show.name} />
            <div className="show-details">
              <h3>{show.show.name}</h3>
              <p>Language: {show.show.language}</p>
              <p>Genres: {show.show.genres.join(', ')}</p>
              <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
