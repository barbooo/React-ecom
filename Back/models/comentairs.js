import mongoose from "mongoose";

const jwt = require(jsonwebtoken);

const userSchema = new mongoose.Schema({
	userid:{type:String, required:true},
	videoid:{type:String, required:true},
	desc:{type:String, required:true},
	
}, {
	timestamps:true
});

/*userSchema.methods.generateAuthToken = function(){
	const token = jwt.sigm({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresln:"7d"})
	return token ;
}*/
export default mongoose.model("User", userSchema);
//const User = mongoose.model("User", userSchema);