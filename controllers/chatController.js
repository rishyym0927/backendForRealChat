const chatModel = require("../models/chatModel");

// Create chat
const createChat = async (req, res) => {
    const { firstId, secondId } = req.body;
    try {
        const chat = await chatModel.findOne({ members: { $all: [firstId, secondId] } });
        if (chat) {
            res.status(200).json(chat);
        } else {
            const newChat = new chatModel({ members: [firstId, secondId] });
            const response = await newChat.save();
            res.status(201).json(response);
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
        console.log(e);
    }
};

// Find chat
const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;
    try {
        const chat = await chatModel.findOne({ members: { $all: [firstId, secondId] } });
        res.status(200).json(chat);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
};

// Find user chats
const findUserChats = async (req, res) => {
    const userId = req.params.userId;
    try {
        const chats = await chatModel.find({ members: { $in: [userId] } });
        res.status(200).json(chats);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
};

// Exporting the functions
module.exports = {
    createChat,
    findChat,
    findUserChats
};
