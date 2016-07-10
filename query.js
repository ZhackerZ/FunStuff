var express = require('express');
var app = express();

app.get('/search',function(req, res){
	var query = req.query;
	// console.log(query.results);
	// console.log(query.type);
	// console.log(query.page);
	res.send(query);
});

app.listen(process.argv[2]);
