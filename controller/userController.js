//@desc Register a user
//@route POST /api/users/register
//@access public

const AsyncHandler = require("express-async-handler");
const User=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');



const registerUser=AsyncHandler(async(req,res)=>{
    const{username,email,password}=req.body;
    if(!username||!email||!password){
        return res.status(400).json({ message: 'All fields are required' });
    }
    const userAvailable=await User.findOne({email});
    if(userAvailable){
        return res.status(400).json({ message: 'User already exists' });
    }
    //hash password
    const hashedpass=await bcrypt.hash(password,10);
    // console.log("hasshed password is:",hashedpass);
    const newUser=await User.create({username,email,password:hashedpass})
      console.log(newUser);
     if(newUser){
        res.status(201).json({_id:newUser.id,email:newUser.email})
     }else{
        return res.status(400).json({ message: 'User data is not valid' });
     }
     
})

const loginUser=AsyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        return res.status(400).json({ message: 'All fields are required' });
    }
    const user=await User.findOne({email});
    //compare
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"}
        );
        res.status(200).json({accessToken});
    }else{
        return res.status(401).json({ message: 'email or password  is not valid' });
    }

  
})

const currentUser=AsyncHandler(async(req,res)=>{
    res.json(req.user);
})




module.exports={registerUser,loginUser,currentUser}