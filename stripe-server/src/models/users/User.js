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
    createdAt: {
       type: mongoose.SchemaTypes.Date,
       required: true,
       default: new Date(), 
    },
});

module.exports = mongoose.model('User', User);