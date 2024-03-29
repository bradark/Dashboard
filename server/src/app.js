require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const discordStrategy = require('./strategies/discord-strat');

const authRoute = require('./routes/auth');

app.use(cors({
    origin: "http://localhost:3001", 
    credentials: true,
}));
//app.use(express.json());
app.use(session({
    secret: 'ran',
    cookie: {
        maxAge: 600000 * 60 * 24
    },
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoute);

module.exports = app;