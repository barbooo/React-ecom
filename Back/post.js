import http from "http";
//import fs from "fs";
import path from "path";
/*const data = JSON.stringify({
	name:"JHON",
	Job:"Farmer"
})
const req =https.request({
	hostname:'reqres.in',
	path:'/api/users',
	method:'POST',
	header:{'Content-type':'application/json',
			'Content-length':data.length}
},(resp)=>{
	let body ="";
	console.log("statucode" + resp.statusCode);
	resp.on('data',(chunk)=>{
		body += chunk;
	})
	resp.on('end',()=>{
		console.log("body: " + JSON.parse(body));
	})
});

req.write(data);
req.end();*/

/*fs.readFile('./text.txt','utf-8',(err, data) =>{
	if (err) throw err;
	console.log(data);
})*/

/*const routes = {
	'/':function index (request, resp){
		resp.writeHead(200);
		resp.end("Node running");
		},
	'/about':function hok (request, resp){
		resp.writeHead(200);
		resp.end("Node for you")
}
}

http.createServer(function(req,res){
	if (req.url in routes)
		return routes[req.url](req, res);
	else
	 res.end("not found");
}).listen(7000);*/

console.log(path.resolve("/Back/text.txt"));