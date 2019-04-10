const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    username:String,
    password:String,
    confirmPassword:String,
    DOB:Date,
    mobileNumber:Number

});
module.exports= mongoose.model('users',userSchema);