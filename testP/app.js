
var express = require('express');
var app = express();
var ip = require("ip");
var opn = require("opn");
var exec = require("child-exec");
var livereload = require('livereload');
var fs = require("fs");



app.get("/", function(req, res) {
	
	var htmls = function() {
		var dir = fs.readdirSync("./views/","utf-8");

		return dir.filter(function(name) {
			return name.match(/\.html$/);
		});

	}();

	var content = htmls.map(function(html) {
		
		return "<li><a href='./" + html + "'>" + html + "</a></li>";
	}).join("");

	res.end("<!doctype html><ul>" + content + "</ul>");


});

app.get("/*.html", function(req, res) {
	var url = req.url || "/index.html";

	var file = url.split("?")[0];

	var content = fs.readFileSync("./views" + file, "utf-8");

	res.end(content);

});

//livereload
var server = livereload.createServer({});
var files = [
	'/',
	'/js/',
	'/css/',
	'/views/'  
];
server.watch(files.map(function (item){
	return __dirname + item;
}))

var myIp = ip.address();
var port = 8082;
var url = "http://" + myIp + ":" + port;


app.listen(port);

opn(url);

exec("compass watch");