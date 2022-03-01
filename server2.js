var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.diskStorage({
    destination: function(req, file, callback){
	    callback(null, './uploads');
	},
    destination: function(req, file, callback){
	    callback(null, file.originalname);
	}	
});

var upload = multer({storage: storage}).single('myfile');

app.get("/", function(req, res){
    res.sendFile(_dirname + "/index.html");
});

app.post("/uploaded", function(req,res){
    upload(req, res, function (err){
        if(err){
            return res.end("Error uploading file");
        }
        res.end("File uploaded successfully!");
    });
});	

app.listen(1212, function(){
    console.log("Carl server is running on port 1212");
});	