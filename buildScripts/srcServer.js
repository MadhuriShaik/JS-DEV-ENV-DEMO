var express = require('express');
var open  = require('open');
var path = require('path')

var app = express();

var port = 8081;
app.listen(port,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        open('http://localhost:'+ port)
    }
   //app.response.send("Helloooo")
})

app.get('/', (req, res) => 
{
    res.sendFile(path.join(__dirname, '../src/index.html'))
})