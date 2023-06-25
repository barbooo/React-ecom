import mongoose from "mongoose";

//const jwt = require(jsonwebtoken);

const userSchema = new mongoose.Schema({
	username:{type:String, required:true, unique:true},
	email:{type:String, required:true, unique:true},
	password:{type:String, required:true, unique:true},
	img:{type:String},
	Subscribers:{type:Number,default:0},
	Subscriberchanel:{type:[String]},
}, {
	timestamps:true
});

/*userSchema.methods.generateAuthToken = function(){
	const token = jwt.sigm({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresln:"7d"})
	return token ;
}*/
export default  mongoose.model("User", userSchema);
//const User = mongoose.model("User", userSchema);