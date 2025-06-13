import React, { useState } from 'react';
import API from '../api';

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/chat', { message: input });
    setResponse(res.data.reply);
  };

  return (
    <div>
      <h2>Event ChatBot</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about events..." />
        <button type="submit">Ask</button>
      </form>
      <div><strong>Response:</strong> {response}</div>
    </div>
  );
}