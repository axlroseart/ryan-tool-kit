const path = require('path');
const ms = require('ms');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../dist/'), {
  etag: true,
  lastModified: true,
  maxAge: ms('10 days'),
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.set('Cache-Control', 'no-cache');
    }
  },
}));

app.use((req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, '../public/'));
});

app.listen(5000, () => {
  console.log('The app server is working at: http://localhost:5000');
});
