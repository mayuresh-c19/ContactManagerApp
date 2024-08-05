const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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
  console.log("Hashed Password : ",hashedPassword);

  // Create user or put user data in MongoDB
  const user = await User.create({
    username,
    email,
    password : hashedPassword,
  });

  console.log(`User Created SuccessFully : ${user}`);
  if(user){
    res.status(201).json({
      _id: user.id , 
      email: user.email,
      message: "User Registered Successfully",
    });
  }else{
    res.status(400);
    throw new Error("User Data is Not Valid");
  }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) =>{
  const {email,password} =req.body;

  if(!email || !password){
    res.status(400);
    throw new Error("All Fields are Mandatory");
  }

  const user = await User.findOne({email});

  // Compare the Passwords
  if(user && (await bcrypt.compare(password,user.password))){
    const accessToken = jwt.sign(
      {
        user:{
          username : user.username,
          email : user.email,
          id : user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn : "1m"}
    );
    res.status(200).json({message : "User Login SuccessFull"});
  }else{
    res.status(401);
    throw new Error("Email or Password is not valid");
  }
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