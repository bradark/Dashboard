const express = require('express');
const app = express();
const cors = require('cors');

const discordRoute = require('./routes/discord.route');

app.use(cors());
app.use(express.json());

app.use('/discord', discordRoute);

module.exports = app;