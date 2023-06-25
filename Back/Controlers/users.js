import { createEror } from "../error.js"
import User from "../models/user.js"
import video from "../models/video.js";


export const update = async (req,res, next)=> {
	// user jay mn verifytoken:
	if (req.params.id === req.user.id){
	try{
		const updateduser = await User.findByIdAndUpdate(req.params.id,{
			$set : res.body,
		},{
			new:true //return la nouvelle version modifie de user si je ne le ferais pas il ne sera pas modifie
		})
		res.status(200).json(updateduser);
	}
	catch(err){
		next(createEror(403,"not found"))
	}
}
else {
	return (next(createEror(403,"you can update your account")))
}
}
export const Delete = async (req,res, next)=> {
	if (req.params.id === req.user.id)
	{
		try{
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json("The user has deleted");
		}
		catch(err){
			next(createEror(400,"not found"))
		}
	}
	else
		return(next(createEror(400,"you can't delete the user ")))
			
}
export const getuser = async(req,res, next)=> {
	try{
		const user = await User.findById(req.params.id)
		res.status(200).json(user);
	}
	catch(err){
		next(createEror(400,"not found"))
	}
}
export const subscribe = async (req,res, next)=> {
	try{
		await User.findByIdAndUpdate(req.user.id,{
			$push:{Subscriberchanel:req.params.id}
		})
		await User.findByIdAndUpdate(req.user.id,{
			$inc:{Subscribers: 1},
		})
		res.status(200).json("subscription succefely")
	}
	catch(err){
		next(createEror(400,"not found"))
	}
}
export const unsubscribe = async (req,res, next)=> {
	try{
		await User.findByIdAndUpdate(req.user.id,{
			$pull:{Subscriberchanel:req.params.id}
		})
		await User.findByIdAndUpdate(req.params.id,{
			$inc:{Subscribers: -1},
		})
		res.status(200).json("deleted succefely")
	}
	catch(err){
		next(createEror(400,"not found"))
	}
}

export const like = async (req,res, next) => {
	const id = req.user.id;
	const vidid = req.params.videoid;
	try{
		await video.findByIdAndUpdate(vidid,{
			$addToSet:{likes:id},
			$pull:{dislikes:id}
		},{new:true})
		res.status(200).json("the video haas been liked !!")
	}
	catch(err){
		next(createEror(400,"not found"))
	}
}
export const dislike = async (req,res, next)=> {
	const id = req.user.id;
	const vidid = req.params.videoid;
	try{
		await video.findByIdAndUpdate(vidid,{
			$addToSet:{dislikes:id},
			$pull:{likes:id}
		})
		res.status(200).json("the video haas been liked !!")
	}
	catch(err){
		next(createEror(400,"not found"))
	}
}