const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'OK',
    date: new Date().toISOString(),
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
