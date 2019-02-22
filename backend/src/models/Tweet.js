const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//caso esse arquivo seja importado, o que será devolvido será o que está especificado abaixo
module.exports = mongoose.model('Tweet', TweetSchema);