import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();
const app = express();
app.use(express.json());

const users =[{
	username:"kely",
	job:"farmer"
},
{
	username:"Nelyy",
	job:"Supervisor"
}]

app.get('/posts',(req, res) =>{
	res.json(users.filter(user=>{user.username === req.user.username}));
	//res.write("hello");
})
app.get('/login',authentif ,(req,res) =>{
	//authentificat user 
	const username = req.body.username;
	const user ={name:username};
	const acces_token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
	res.json({acces_token : acces_token});
	
})
function authentif(req, res, next){
	const authoheader = req.headers['authorization'];
	const acces = authoheader &&  authoheader.split(' ')[1];
	if (acces == null) res.sendStatus(401);
	jwt.verify(acces,process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
		if (err) res.sendStatus(403);
		req.user = user;
		next();
	})
}
app.listen(5000);

console.log("hy")