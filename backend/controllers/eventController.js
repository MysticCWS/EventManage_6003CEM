const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const { title, description, location, date } = req.body;
  const newEvent = new Event({
    title,
    description,
    location,
    date,
    createdBy: req.userId
  });
  await newEvent.save();
  res.status(201).json(newEvent);
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const updated = await Event.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.json({ message: 'Event deleted' });
};