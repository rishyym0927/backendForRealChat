const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: [String], // Assuming members are strings (user IDs)
}, {
    timestamps: true
});

const chatModel = mongoose.model('Chat', chatSchema);

module.exports = chatModel;
