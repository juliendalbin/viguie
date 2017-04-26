/**
 * Module dependencies.
 */

var express = require('express');
var dao = require('./dao');
var http = require('http');
var path = require('path');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var guard = require('express-jwt-permissions');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty');
var nodemailer = require("nodemailer");
var fs = require("fs");

var secret = 'n8jTwiRYBtJF25Wpk7X1fRvtxDrKs8P5lXP16DqytRwa0Pfa6omupI5YWgGjF3kUeP4F08LeklnwCQGoDMouLZcija8aRZaMEBQdrDSjRp9OGnVrfrZqosHE';

//load daos
var client = require('./dao/client');
var commande = require('./dao/commande');
var colis = require('./dao/colis');
var authorize = require('./service/authorize');
var UserController = require('./controller/UserController');

global.filesPath = __dirname + '/files/';

var multipartyMiddleware = multiparty();

var app = express();

app.use('/api', expressJwt({secret: secret}));

var connection = require('express-myconnection');
var mysql = require('mysql');

app.use(multiparty({
    uploadDir: './files'
}));


var content = JSON.parse(fs.readFileSync("mail.json"));

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: content.service,
    auth: {
        user: content.auth.user,
        pass: content.auth.pass
    }
});

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


// development only
//app.use(express.errorHandler());

/*------------------------------------------
 connection peer, register as middleware
 type koneksi : single,pool and request
 -------------------------------------------*/

app.use(
    connection(mysql, {

        host: 'localhost',
        user: 'root',
        password: 'Paraski0',
        port: 3306, //port mysql
        database: 'viguie'

    }, 'pool') //or single

);

app.use(function (err, req, res, next) {
    if (err.constructor.name === 'UnauthorizedError') {
        res.status(401).send('Unauthorized');
    }
});

app.get('/checkpass/:pass', function (req, res) {
    bcrypt.hash(req.params.pass, bcrypt.genSaltSync(8), null, function (err, hash) {
        res.send(hash);
    });
});

app.post('/auth', authorize.authorize);

app.get('/', function(req, res) {
    // Prepare the context
    res.render('/app/index.html');
});

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/client', client.selectAllClient);
app.post('/api/client', client.insertClient);
app.get('/api/client/:id', client.selectClientById);
app.put('/api/client/:id', client.updateClient);
app.delete('/api/client/:id', client.deleteClient);
app.get('/commande', commande.selectAllCommande);
app.post('/api/commande', commande.insertCommande);
app.get('/api/commande/:id', commande.selectCommandeById);
app.put('/api/commande/:id', commande.updateCommande);
app.delete('/api/commande/:id', commande.deleteCommande);
app.get('/colis', colis.selectAllColis);
app.post('/api/colis', colis.insertColis);
app.get('/api/colis/:id', colis.selectColisById);
app.put('/api/colis/:id', colis.updateColis);
app.delete('/api/colis/:id', colis.deleteColis);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});