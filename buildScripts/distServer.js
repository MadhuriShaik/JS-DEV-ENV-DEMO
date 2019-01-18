import express from 'express';
import open  from 'open';
import path from 'path';
import compression from 'compression';

var app = express();
var port = 8081;

app.use(express.static('dist'));

app.use(compression());

app.listen(port,(err)=>
{
    if(err)
    {
        console.log(err); //eslint-disable-line no-console
    }
    else{
        open('http://localhost:'+ port)
    }
   //app.response.send("Helloooo")
})

app.get('/', (req, res) => 
{
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', (req, res) => {
    res.json([
        {"id": 1, "firstName":"Madhuri", "lastName":"Shaik", "email":"madhuri@gmail.com"},
        {"id": 2, "firstName":"Aswathy", "lastName":"KJ", "email":"ashu@gmail.com"},
        {"id": 3, "firstName":"Pavani", "lastName":"Samatam", "email":"pavani@gmail.com"}
    ]);
});