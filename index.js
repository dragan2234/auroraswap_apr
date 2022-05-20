//Import express.js module and create its variable.
const express=require('express');
const app=express();

//Import PythonShell module.
const {PythonShell} =require('python-shell');

//Router to handle the incoming request.
app.get("/", (req, res, next)=>{
	//Here are the option object in which arguments can be passed for the deploy.py.
	let options = {};
	

	PythonShell.run('deploy.py', options, function (err, result){
		if (err) throw err;
		// result is an array consisting of messages collected
		// during execution of script.
		console.log('result: ', result.toString());
		res.send(result.toString())
	});
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const port=8000;
app.listen(port, ()=>console.log(`Server connected to ${port}`));
