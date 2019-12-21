/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'pastenow'
            });
var DATABASE_URL = "host=ec2-107-21-255-181.compute-1.amazonaws.com port=5432 dbname=db7mmsari6eldp user=inqdxhknahtldu password=583146ca334efbc3dc8cc19a937ecd76e67c6eb5f258e29d1e328234736b39b8";
//$dbconnection = pg_connect($conn_string);

const { Pool, Client } = require('pg')

    const db = new Pool({
      connectionString: DATABASE_URL,
      ssl: false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });


//connection.connect();
//global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//-----use--------
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',routes.home);

app.post('/send',routes.call_send);


app.listen(8080);
