const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const blacklistModel = mongoose.model('blacklist', blacklistSchema);

module.exports = blacklistModel;