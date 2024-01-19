import mongoose from "mongoose";

const packages=new mongoose.Schema({
  place_name:{
        type:String
    },
   days:{
        type:Number
    },
    nights:{
        type:Number
    },
    image:{
        type:String
    }
   
   
})

export default mongoose.model.packages || mongoose.model("package",packages)