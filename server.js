const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in this folder (index.html, styles.css, script.js, images, etc.)
app.use(express.static(path.join(__dirname)));

// Any unmatched route falls back to index.html (fine for a one-pager;
// also sets you up for adding more routes/pages later)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Alluring Beauty Bar running on port ${PORT}`);
});
