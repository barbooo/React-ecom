import { createEror } from "../error";
import Coments from "../models/comentairs.js"
import User from "../models/user";
import Video from "../models/video";


export const addcom = async (req,res,next)=>{
	const newcom = new Coments({userid:req.user.id,videoid:req.body.videoid,...req.body})
	try{
		const comsaved = await newcom.save();
		res.status(200).json(comsaved);
	}
	catch(err){
		next(err);
	}
}

export const delcom = async (req,res,next)=>{
	try{
		const vidid = await Video.findById(req.params.id);
		const  usid= await Coments.findById(req.params.id);
		if (vidid.userid === req.user.id && usid.userid === req.user.id){
			await Coments.findByIdAndDelete(req.params.id);
			res.status(200).json("comments has deleted");
		}else {
			return next(createEror(403,"you can't delete the comments !!"))
		}
	}
	catch(err){
		next(err);
	}
}
export const getcom = async (req,res,next)=>{
	try{
		const coments = await Coments.find({videoid:req.params.videoid});
		if (!coments) return (next(createEror(401,"comments not founded!")))
		res.status(200).json(coments);
	}
	catch(err){
		next(err);
	}
}