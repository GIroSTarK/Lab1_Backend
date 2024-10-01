const express = require('express');
const app = express();

let server;

app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'OK',
    date: new Date().toISOString(),
  });
});

const PORT = 3000;
server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const shutdown = () => {
  console.log('Received shutdown signal, closing server...');
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcing shutdown after 10 seconds...');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
