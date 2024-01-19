import mongoose from "mongoose";

const User=new mongoose.Schema({
    fname:{
        type:String,
        required:[true,"Username is required"]
    },
    lname:{
        type:String,
        required:[true,"email is required"],
    },
    username:{
        type:String,
        required:[true,"password is required"],
        unique:[true,"password already exist"]
    },
   
    email:{
        type:String,
        required:[true,"address is required"],
        unique:[true,"address already exist"]
    },
    password:{
        type:String,
        required:[true,"phno is required"],
        unique:[true,"phno already exist"]
    },
    address:{
        type:String,
        required:[true,"phno is required"]
    },
    mob:{
        type:Number,
        required:[true,"phno is required"],
        unique:[true,"phno already exist"]
    }
})

export default mongoose.model.users || mongoose.model("users",User)