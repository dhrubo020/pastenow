/**
* Module dependencies.

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
/*var mysql      = require('mysql');
var bodyParser=require("body-parser");

const connectionString = 'postgresql://inqdxhknahtldu:583146ca334efbc3dc8cc19a937ecd76e67c6eb5f258e29d1e328234736b39b8@ec2-107-21-255-181.compute-1.amazonaws.com:5432/db7mmsari6eldp'

const { Pool, Client } = require('pg')

    var db = new Pool({
      connectionString: connectionString
    });



app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',routes.home);

app.post('/send',routes.call_send);


*/
app.get('/',"hello");
app.listen(8080);
//-------------------------------------------------------------------------------
*/

// using the http module
let http = require('http'),
 
// look for PORT environment variable, 
// else look for CLI argument,
// else use hard coded value for port 8080
port = process.env.PORT || process.argv[2] || 8080;
 
// create a simple server
let server = http.createServer(function (req, res) {
 
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('hello heroku!', 'utf-8');
        res.end();
 
    });
 
// listen on the port
server.listen(port, function () {
 
    console.log('app up on port: ' + port);
 
});
