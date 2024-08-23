const messageModel =require('../models/messageModel')
//create message
const createMessage = async(req, res)=>{
    const {chatId, senderId, text}= req.body
    const message  = new messageModel({
        chatId, senderId, text
    })

    try{
        const newMessage = await message.save()
        res.status(201).json(newMessage)
    }catch(err){
        console.error('Error creating message', err)
        res.status(500).json({error: 'Server error, please try again'})
    }
}

//get Message

const getMessages = async(req, res)=>{
    const {chatId} = req.params;
    try{
        const messages = await messageModel.find({chatId})
        res.status(200).json(messages)
    }catch(err){
        console.error('Error getting messages', err)
        res.status(500).json({error: 'Server error, please try again'})
    }
}

//


module.exports = {createMessage, getMessages}