const mong = require('mongoose');

module.exports = () => {
	const connectionParams = {
		useNewUrlParser:true,
		useUnifiedTopology:true,
	};

	try{
		mong.connect(process.env.DB, connectionParams);
		console.log("connected au base de donnees");
	}
	catch (error){
		console.log(error);
		console.log("not connected to db");
	}
}