const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

registerUser=async (req,res)=>{
    try {
        let name=req.body.name;
        let email=req.body.email;
        let password=req.body.password;
        let confirmPass=req.body.confirmPass;
        let phone=req.body.phone;

        if(password!=confirmPass){
            res.status(201).json("invalid password");
        }
        
        let user=await User.findOne({email:email});
        
        if(user){
            res.status(201).json("user already exists!!");
        }
        const hash = crypto.createHash('sha256').update(password).digest('hex');
        user=await User.create({name:name,
                          email:email,
                          password:hash,
                          phone:phone  
                        });
        res.status(400).json(user);

    } catch (error) {
        if (error.code === 11000) {
            console.log("duplicate key error!!")
          }
    }
}

loginUser=async (req,res)=>{
    try {
        let email=req.body.email;
        let password=req.body.password;
        let user=await User.findOne({email:email});
        console.log(user);
        if(!user){
            res.status(201).json("not registered!!");
        }
        const hash = crypto.createHash('sha256').update(password).digest('hex');
        console.log(hash);
        console.log(user.password)
        if(!(hash===user.password)){
            res.status(201).json("Invalid Username or password!!");
        }
        let id=user._id;
       let name=user.name;
       let phone=user.phone;

       const payload = {
        id:user._id,
        email:user.email
      };
      
      const secret = 'snehil';
      
      const token = jwt.sign(payload, secret);

        res.status(201).json({id,name,email,phone,token});
    } catch (err) {
        console.log(err)
    }
}
me=async (req,res)=>{
    try {
        const id=req.params.id;
        const user=await User.findOne({_id:id},'-password');
        if(!user){
            res.status(400).json("No such user exists!!");
        }
        res.status(201).json(user)
    } catch (err) {
        console.log(err);
    }
}
module.exports={registerUser,loginUser,me}
