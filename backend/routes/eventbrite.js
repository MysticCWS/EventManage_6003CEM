const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/:city', async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get(`https://www.eventbriteapi.com/v3/events/search/`, {
      headers: {
        Authorization: `Bearer ${process.env.EVENTBRITE_TOKEN}`
      },
      params: {
        'location.address': city,
        'location.within': '10km',
        'sort_by': 'date',
      }
    });
    res.json(response.data.events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from Eventbrite' });
  }
});

module.exports = router;