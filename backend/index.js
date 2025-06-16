const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Contoh endpoint API dummy
app.get('/api/sensor', (req, res) => {
  res.json([
    { time: '10:00', value: 22 },
    { time: '10:05', value: 23 },
    { time: '10:11', value: 24 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
