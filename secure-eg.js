// Importing Dependencies
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');const app = express();// Helmet
app.use(helmet());// Rate Limiting
const limit = rateLimit({
    max: 100,// max requests
    windowMs: 60 * 60 * 1000, // 1 Hour of 'ban' / lockout
    message: 'Too many requests' // message to send
});
app.use('/routeName', limit); // Setting limiter on specific route// Body Parser
app.use(express.json({ limit: '10kb' })); // Body limit is 10// Data Sanitization against NoSQL Injection Attacks
app.use(mongoSanitize());// Data Sanitization against XSS attacks
app.use(xss()
