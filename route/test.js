const express = require("express");
const route = express.Router();
const multipartMiddleware = require('connect-multiparty')();
route.get('/get', (req, res) => {
	res.send('Hello Wor11ld!')
	console.log(req.query)
})

route.post('/post',(req,res)=>{
	res.send('测试post:'+req.body)
	console.log(req.headers.token)
	console.log(req.body)
})

route.post('/formData',multipartMiddleware,function(req,res){
	console.log(req.body)
	res.send('测试formData:'+req.body)
});


module.exports = route;