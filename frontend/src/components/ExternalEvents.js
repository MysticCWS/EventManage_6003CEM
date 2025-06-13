import React, { useEffect, useState } from 'react';
import API from '../api';

export default function ExternalEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get('/eb/London').then(res => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Public Events (Eventbrite)</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>{e.name.text}</li>
        ))}
      </ul>
    </div>
  );
}