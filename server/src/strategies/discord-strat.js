const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const userModel = require('../models/users/User.js');
const db = require('../database/database.js');

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
    var adminedServers = [];
    profile.guilds.forEach((guild) => {
        if(guild.permissions == 2147483647){
            adminedServers.push({
                guildName: guild.name,
                guildID: guild.id
            });
        }
    });
    console.log(adminedServers);
    var user = new userModel({
        discordID: profile.id,
        username: profile.username,
        avatar: profile.avatar,
        discriminator: profile.discriminator,
        accessToken: profile.accessToken,
        refreshToken: refreshToken,
        adminedServers: adminedServers,
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