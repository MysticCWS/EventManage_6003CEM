import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import EventList from './components/EventList';
import AddEvent from './components/AddEvent';
import ChatBot from './components/ChatBot';
import ExternalEvents from './components/ExternalEvents';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/chat" element={<ChatBot />} />
        <Route path="/external-events" element={<ExternalEvents />} />
         {/* Protected Route */}
        <Route path="/add-event" element={
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;