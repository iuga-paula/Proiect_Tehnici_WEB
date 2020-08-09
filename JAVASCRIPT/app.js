
const http = require('http');
const port = 3000;
var fs = require('fs');


const server = http.createServer(function(req, res){
    // res.write('Hello Node');
    // res.end();
    fs.readFile("./"+req.url, function(err,data){
        if(err)
        {res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
        }

        res.writeHead(200);
        res.end(data);
    })

})

server.listen(port, function(error){
    if (error){
        console.log('Nu merge', error)
    }
    else{
        console.log('Serverul merge cu portul ' + port)
    }

})


    // fs.writeFile("Comments.json",data_json, finished);
    // function finished(err)
    // {
    //   console.log("all form 2 set");
    // }
