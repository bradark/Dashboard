const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const userModel = require('../models/users/User.js');
const db = require('../../../server/src/database/database');

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(new DiscordStrategy({
    clientID: '995494000607899669',
    clientSecret: 'QKiHJeOSQwyLAI830qjtlm8nPCdoPWdA',
    callbackURL: 'http://localhost:3000/auth/redirect',
    scope: ['identity', 'email', 'guilds'],
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    var user = new userModel({
        discordID: profile.id,
        username: profile.username,
        avatar: profile.avatar,
        discriminator: profile.discriminator,
        accessToken: profile.accessToken,
        refreshToken: refreshToken,
    }) 
    user.save(function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    });
    return done(null, profile);
}));