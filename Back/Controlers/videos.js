import { createEror } from "../error.js";
import Video from "../models/video.js"


export const addvid = async(req,res,next) =>{
	const newvideo = new Video({userid:req.user.id, ...req.body})
try{
const videosaved = await newvideo.save();
res.status(200).json(videosaved);
}
catch(err){
next(err);
}
}

export const updvid = async(req,res,next) =>{
	
	try{
	const vid = await Video.findById(req.params.id);
	if (!vid)
		return (next(createEror(404,"Video not founded!")))
	if (req.user.id === Video.userid){

		const updvid = await Video.findByIdAndUpdate(req.params.id,{
			$set:req.body,
		},{new:true})
	}
	res.status(200).json(updvid);
	}
	catch(err){
		next(err);
	}
}
export const deletvid = async(req,res,next) =>{
	try{
		const vid = await Video.findById(req.params.id);
		if (!vid)
			return (next(createEror(404,"Video not founded!")))
		if (req.user.id === Video.userid){
			const updatvid = await Video.findByIdAndDelete(req.params.id,{
		})
		res.status(200).json("deleted Succefely !");
		}
	}
		catch(err){
		next(err);
		}
}

export const getvid = async(req,res,next) =>{
	try{
		const vid = await Video.findById(req.params.id);
		if (!vid)
			return (next(createEror(404,"Video not founded!")))
		res.status(200).json(vid);
		}
		catch(err){
		 next(err);
		}
}
export const addview = async(req,res,next) =>{
	try{
		 await Video.findByIdAndUpdate(req.params.id,{
			$inc:{views:1}
		 });
		res.status(200).json("the views has benn increased");
		}
		catch(err){
		 next(err);
		}
}
export const trend = async(req,res,next) =>{
	try{
		const videos = await Video.find().sort({views:-1})//katjib liya les videos akter mochahada mn mongodb
		if (!videos)
			return (next(createEror(404,"Video not founded!")))
		res.status(200).json(videos);
		}
		catch(err){
		 next(err);
		}
}
export const random = async(req,res,next) =>{
	try{
		const videos = await Video.aggregate([{$sample:{size:40}}]);//katjib liya 40 videos mn base de donnes
		if (!vid)
			return (next(createEror(404,"Video not founded!")))
		res.status(200).json(videos);
		}
		catch(err){
		 next(err);
		}
}
export const subvid = async(req,res,next) =>{
	try{
		const user = await Video.findById(req.user.id)
		const subscribch = user.Subscriberchanel;
		const list = await Promise.all(
			subscribch.map((chanelid)=>{
				return Video.find({userid:chanelid})
			})
		)
		res.status(200).json(list.flat());
		}
		catch(err){
		 next(err);
		}
}

export const getbytags = async(req,res,next)=>{
	try{
		const tags = req.query.tags.split(",");
		console.log(tags);
		const vid = await Video.find({tags:{$in:tags}}).limit(10);
		res.status(200).json(vid);
	}
	catch(err){
		next(err);
	}
}

export const search = async (req,res,next) =>{
	try{
		const resp = req.query.q;
		console.log(resp);
		const vid = await Video.find({title:{$rejex:resp, $options:"i",}}).limit(30);
		res.status(200).json(vid);
	}
	catch(err){
		next(err);
	}
}