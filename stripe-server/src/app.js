const express = require('express');
const app = express();
const cors = require('cors');
const StripeRouter = require('./routes/stripe');

app.use(cors({
    credentials: true,
}));
//app.use(express.json());

app.use('/', StripeRouter);

module.exports = app;