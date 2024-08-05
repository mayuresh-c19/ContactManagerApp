const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");


//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) =>{
  const {username,email,password} = req.body;
  if(!username || !email || !password){
    res.status(400);
    throw new Error("All Fields are Mandatory"); 
  }

  const userAvailable = await User.findOne({email});
  if(userAvailable){
    res.status(400);
    throw new Error("User Already Exists"); 
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password,10);
  console.log(hashedPassword);
  res.status(200).json({message : "User Registered SuccessFully"});
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) =>{
  res.status(200).json({message : "User Logged SuccessFully"});
})

//@desc Login a user
//@route GET /api/users/current
//@access public
const getCurrentUser = asyncHandler(async (req,res) =>{
  res.status(400).json({message : "Current User Information"});
})

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
}