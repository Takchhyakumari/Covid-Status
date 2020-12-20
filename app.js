var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

// app.get("/", function(req,res){
// 	res.render("search");
// });

app.get("/",function(req,res){
	request("https://api.covid19api.com/summary", function(error,response,body){
	if(!error && response.statusCode == 200){
		var data = JSON.parse(body);
		res.render("complete", {data: data});
	}
});
});

app.get("/country", function(req,res){
	// var query = req.query.name;
	request("https://api.covid19api.com/summary", function(error,response,body){
	if(!error && response.statusCode == 200){
		var data = JSON.parse(body);
		res.render("results", {data: data});
	}
});
});

app.listen(3000, function(){
	console.log("Sever has started!");
});