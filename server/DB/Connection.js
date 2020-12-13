import mongoose from 'mongoose'

const URI = 'mongodb+srv://javascriptmastery:Airwestf27@cluster0.v7f60.mongodb.net/sandbox?retryWrites=true&w=majority'

const connectDB = async() =>{
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('DB CONNECTED!!! YAY!!!')
}

export default connectDB