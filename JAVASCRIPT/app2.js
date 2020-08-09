var express = require('express');  //incarc modulul express 
var app = express();
var x = require('body-parser')
var fs  = require('fs');

app.use(express.static('./')); 
app.use(x.urlencoded({extended:true}));
app.post('/comm',function(req,res){ var date= fs.readFileSync("./Comments.json"); 
var ob=JSON.parse(date); 
//console.log(date);
//var ob=req.body;
//console.log(req.body);
ob.push(req.body); 
fs.writeFileSync("Comments.json",JSON.stringify(ob));
res.send("Comm adaugat:" + req.body);});

app.use(function(req,res){res.status(404).send("<html><body>Page not found!</body></html>");}); 
app.listen(8080, function() {console.log('listening to 8080')}); 