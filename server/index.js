import express from 'express'
import connectDB from './DB/Connection.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'


const app = express()

// Middleware
app.use('/posts', postRoutes)

// Set up bodyParser to be able to send requests.
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

connectDB()
const PORT = process.env.Port || 3000

app.listen(PORT, () => console.log(`Server is RUNNING and started on port ${3000}`))

// const CONNECTION_URL = 'mongodb+srv://javascriptmastery:@Airwestf27@sandbox.kumrl.mongodb.net/Sandbox?retryWrites=true&w=majority'
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
//     .catch( error => console.log(error.message))

//     mongoose.set('useFindAndModify', false)

