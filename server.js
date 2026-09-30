const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Don't advertise that the site runs on Express
app.disable('x-powered-by');

// Security headers on every response
app.use((req, res, next) => {
  res.set({
    // Only load scripts/styles/images from this site, plus Google Fonts
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' https://fonts.googleapis.com",
      "font-src https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  });
  next();
});

// Serve only the website files in /public — never server.js, package.json or node_modules
app.use(express.static(PUBLIC_DIR, { dotfiles: 'ignore', index: 'index.html' }));

// Anything else is a real 404, not the homepage
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Alluring Beauty Bar running on port ${PORT}`);
});
