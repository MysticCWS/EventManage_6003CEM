const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const result = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = result.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Chatbot failed', details: err.message });
  }
});

module.exports = router;