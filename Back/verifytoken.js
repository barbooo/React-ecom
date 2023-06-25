import jwt from"jsonwebtoken"
import { createEror } from "./error.js";

export const verifytoken = (req, res, next) => {
	const token = req.cookie.acces_token;
	console.log(token);
	if(!token)
	 return (next(createEror(403, "Your are not authentificated !")))
	 //si laverification est true il va returner user et le token contiens le id de user 
	 jwt.verify(token,process.env.JWTPRIVATEKEY, (err, user))
	 if (err) return (next(createEror(403,"token not correct")))
	 req.user = user;
	 next();
}
