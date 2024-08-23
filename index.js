const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const userRoute = require('./routes/userRoute')
const chatRoute = require('./routes/chatRoutes')
const messageRoute = require('./routes/messageRoutes')

dotenv.config()

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your client's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(express.json())

app.use(cors(corsOptions));
app.use("/api/users", userRoute)
app.use("/api/chats", chatRoute)
app.use("/api/messages", messageRoute
)
const PORT = process.env.PORT || 5000

//crud
app.get("/",(req, res)=>{
    res.send("Hello from the server")   
})


mongoose.connect(process.env.ATLAS_URI).then(()=>{
    console.log('Connected to MongoDB')
}).catch((error)=>{
    console.error('Error connecting to MongoDB:', error)
})

app.listen(PORT, ((req, res)=>{
    console.log(`listening on ${PORT}`)
}))
