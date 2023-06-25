import mongoose from "mongoose";
import jwt from "jsonwebtoken"
//const jwt = require(jsonwebtoken);

const vidSchema = new mongoose.Schema({
	userid:{type:String, required:true},
	title:{type:String, required:true},
	desc:{type:String, required:true},
	imgurl:{type:String, required:true},
	vidUrl:{type:String,required:true},
	views:{type:Number,default:0},
	tags:{type:[String],default:[]},
	likes:{type:[String],default:[]},
	dislikes:{type:[String],default:[]},
}, {
	timestamps:true
});

/*userSchema.methods.generateAuthToken = function(){
	const token = jwt.sigm({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresln:"7d"})
	return token ;
}*/
export default mongoose.model("Video", vidSchema);
//const User = mongoose.model("User", userSchema);