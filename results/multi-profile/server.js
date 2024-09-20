const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Endpoint untuk mendapatkan profil unik
app.get('/unique-profile', (req, res) => {
  const uniqueProfile = {
    profileId: generateUniqueId(),
    fakeLocation: {
      latitude: getRandomArbitrary(-90, 90),
      longitude: getRandomArbitrary(-180, 180)
    },
    fakeIP: generateFakeIP(),
    userAgent: generateFakeUserAgent()
  };
  res.json(uniqueProfile);
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

function generateFakeIP() {
  return `${getRandomArbitrary(1, 255)}.${getRandomArbitrary(1, 255)}.${getRandomArbitrary(1, 255)}.${getRandomArbitrary(1, 255)}`;
}

function generateFakeUserAgent() {
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  ];
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

