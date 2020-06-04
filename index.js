// var http = require('http');
const express = require('express')
const app = express();

const bodyParser = require('body-parser')
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

//设置服务器跨域权限
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     next();
// });

const routeUser = require('./route/test')
app.use('/test',routeUser)

// const tool = require('./common/tool')
// console.log(tool.testFn())


app.listen(port, () => {
	console.log(`Exampl11e app listening on port ${port}!`)
})