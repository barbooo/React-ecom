
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import User from "../models/user.js"
import { createEror } from "../error.js";
import jwt  from "jsonwebtoken";
import cookieParsee from "cookie-parser";

export const auth = async (req,res,next)=> {

	try{
		const salt =  bcrypt.genSaltSync(10);
		const hash =  bcrypt.hashSync(req.body.password,salt);
		const newusr = new User({ ...req.body, password: hash});
		console.log(newusr);
		console.log(req.body);
		await newusr.save();
		res.status(201).send("the user has created succefely");
	}	
	catch(err){
		next(createEror(404,"not found !"));
	}
}
export const signin = async (req,res,next)=> {

	//console.log(req.body); 
	try{
		//user au sein du bd
		comsole.log(req.body);
		const user = await User.findOne(req.body.username);
		if (!user)
			return (next(createEror(404, "user not found")))
		const iscorect = await bcrypt.compare(req.body.password,user.password);
		if(!iscorect)
			return (next(createEror(400, "wrong password")))
		const token = jwt.sign({id:user._id},process.env.JWTPRIVATEKEY);
		const {password , ...others} = user._doc;
		//delete user.password;
		res.cookie("acces_token", token,{
			httpOnly:true
		}).status(200).json(others);
	}	
	catch(err){
		next(createEror(404,"not founded !"));
	}
}

