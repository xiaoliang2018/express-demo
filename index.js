// var http = require('http');
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const multipartMiddleware = require('connect-multiparty')();
//supervisor index.js 热加载
// pm2 start index.js  守护进程
//pm2 delete index.js 删除进程
const port = 1000
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
//x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})) 

app.get('/test', (req, res) => {
	res.send('Hello Wor11ld!:'+req.query)
	console.log(req.query)
})

app.post('/test',(req,res)=>{
	res.send('测试post:'+req.body)
	console.log(req.headers.token)
	console.log(req.body)
})

app.post('/formData',multipartMiddleware,function(req,res){
	console.log(req.body)
	res.send('测试formData:'+req.body)
});
app.listen(port, () => {
	console.log(`Exampl11e app listening on port ${port}!`)
})