// Test file for AI build predictor
const express = require('express');
const app = express();

// Security issue: hardcoded password
const dbPassword = "admin123";

// Potential issue: open to all IPs
app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on all interfaces');
});

// Good code
function calculateSum(a, b) {
    return a + b;
}

module.exports = app;