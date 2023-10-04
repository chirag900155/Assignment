import mongoose from "mongoose";

const connection = async ()=>{
    const URL = 'mongodb+srv://ChiragGwalani:Chirag123@cluster0.6smf1n8.mongodb.net/Assignment?retryWrites=true&w=majority'

    try{
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Succesfully connected with the database");
    }catch(err){
        console.log(err);
    }
}

export default connection