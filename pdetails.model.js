import mongoose from "mongoose";

const pdetails=new mongoose.Schema({
 duration:{
        type:String
    },
   description:{
        type:String
    }
   
   
})

export default mongoose.model.pdetails || mongoose.model("pdetails",pdetails)