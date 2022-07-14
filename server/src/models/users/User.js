const mongoose = require('mongoose');

const User = new mongoose.Schema({
    discordID: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    avatar: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    discriminator: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    accessToken: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    refreshToken: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    stripeRefreshToken: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: 'NOT_CONNECTED',
    },
    stripeUserID: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: 'NOT_CONNECTED',
    },
    createdAt: {
       type: mongoose.SchemaTypes.Date,
       required: true,
       default: new Date(), 
    },
});

module.exports = mongoose.model('User', User);