const prom = new Promise((resolve, reject) =>{
	const alea = Math.trunc(Math.random() * 10) + 1;
	if (alea <= 5)
		resolve("entre 0 ou 5");
	else
		reject("entre 6 etv 10");
});