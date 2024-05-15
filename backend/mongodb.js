import mongoose from "mongoose";

const mongoSchma=mongoose.Schema({
    url: String,
    chanel: String, 
    discrption: String,
    likes: String, 
    share: String,
    message: String
})

const mongoModel=mongoose.model("mongoModel", mongoSchma);

export default mongoModel;