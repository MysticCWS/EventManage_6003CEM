import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function AddEvent() {
  const [form, setForm] = useState({ title: '', description: '', location: '', date: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/events', form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <input type="text" placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} required />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} required />
      <input type="text" placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })} required />
      <input type="date" onChange={e => setForm({ ...form, date: e.target.value })} required />
      <button type="submit">Create</button>
    </form>
  );
}