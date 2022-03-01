//Gegante, Carl D. WD - 202

var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
       response.send("You have succesfully created your second app! ");
})

var server = app.listen(2003, function () {
    var host = server.address().address
    var port = server.address().port
	
	
	
	console.log("Example app listening at http://%s:%s", host, port)

})
