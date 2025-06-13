import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    API.get('/events').then(res => setEvents(res.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      
      {isLoggedIn ? (
        <>
          <Link to="/add-event">Add New Event</Link> |{' '}
          <Link to="/chat">Chatbot</Link> |{' '}
          <Link to="/external-events">View Public Events</Link> |{' '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> |{' '}
          <Link to="/register">Register</Link> |{' '}
          <Link to="/external-events">Public Events</Link>
        </>
      )}
      
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>📍 {event.location}</p>
            <p>📅 {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}