const router = require('express').Router();
const passport = require('passport');
const { ensureAuthenticated } = require('./ensureAuth');
const userModel = require('../models/users/User.js');
const db = require('../database/database.js');

const oAuthUrl = 'https://discord.com/oauth2/authorize?client_id=995494000607899669&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guildshttps://discord.com/api/oauth2/authorize?client_id=995494000607899669&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds';

router.get('/', passport.authenticate('discord'));

router.get('/redirect', passport.authenticate('discord', {
    //failureRedirect: '/auth/forbidden',
    successRedirect: 'http://localhost:3001/profile'
}), (req, res) => {
    res.json({
        success: 1
    });
});

router.get('/success',  ensureAuthenticated, (req, res) => {
    console.log(req.user);
    res.json({
        success: 1,
        userData: req.user,
    });
});

router.get('/updateProfile', ensureAuthenticated, async (req, res) => {
    let stripeRefreshToken = req.query.refresh_token;
    let stripeUserID = req.query.stripe_user_id;
    await userModel.findOneAndUpdate({discordID: req.user.id}, {stripeRefreshToken: stripeRefreshToken, stripeUserID: stripeUserID});
    res.redirect('http://localhost:3001/payments');
})

router.get('/getUserData', ensureAuthenticated, async (req, res) => {
    userModel.find({discordID: req.user.id})
        .then(users => {
            res.json(users[0]);
        });
})

router.get('/forbidden', (req, res) => {
    res.json({login: 'fail'});
});

module.exports = router;