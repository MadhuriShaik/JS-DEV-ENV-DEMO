import express from 'express';
import open  from 'open';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

var app = express();
var port = 8081;

const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

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

app.get('/users', (req, res) => {
    res.json([
        {"id": 1, "firstName":"Madhuri", "lastName":"Shaik", "email":"madhuri@gmail.com"},
        {"id": 2, "firstName":"Aswathy", "lastName":"KJ", "email":"ashu@gmail.com"},
        {"id": 3, "firstName":"Pavani", "lastName":"Samatam", "email":"pavani@gmail.com"}
    ]);
});