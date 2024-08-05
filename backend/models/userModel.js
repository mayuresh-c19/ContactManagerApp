const mongoose = require("mongoose");

const userSchema = mongoose.Schema({ 
    username : {
        type : String,
        required : [true, "Please add the User Name"],
    },
    email : {
        type : String,
        required : [true, "Please add the User Email"],
        unique : [true, "Email Address Already Present"],
    },
    password : {
        type : String,
        required : [true, "Please add the User password"],
    }
},{
    timestamps : true,
});

module.exports = mongoose.model("User", userSchema);