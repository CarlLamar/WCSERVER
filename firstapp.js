//Gegante, Carl D. WD - 202

var express = require("Express");
var app = express();

app.get("/", function(request, response){
       response.send("Hello World!");
});

app.listen(2000, function(){
	console.log('Server is running at http://localhost:2000');
});