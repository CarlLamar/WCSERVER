var express = require("Express");

var app = express();
var bodyParser = require ("body-parser");

var urlencodedParser = bodyParser.urlencoded({extended : false})
app.use(express.static('public'));
app.get("/post.html", function (req, res){
    res.sendFile(_dirname + "/" + "post.html");
})

app.post("/process_post", urlencodedParser, function(req, res){
    response = {
	    first_name:req.body.fName,
		last_name:req.body.lname
		
		};
		console.log(response);
		res.end(JSON.stringify(response));
});
var server = app.listen(1975,function(){
    var host = server.address() .address
    var port = server.address.() .port
    console.log("Example App listening at http://%s:%s,host, port")
});	