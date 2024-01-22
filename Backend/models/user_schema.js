const mongoose= require('mongoose');
const { v4: uuidv4 } = require('uuid');


const userSchema=mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const userModel=mongoose.model("Baap Student",userSchema);

module.exports=userModel;