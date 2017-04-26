/*
 * GET users listing.
 */
var bcrypt = require('bcrypt-nodejs');

exports.selectAllClient = function (req, res) {

    req.getConnection(function (err, connection) {

        if (err)
            console.log("Error Selecting : %s ", err);

        var query = connection.query('SELECT * FROM client', function (err, rows) {
            res.json(rows);
        });
    });

};

exports.selectClientById = function (req, res) {

    var id = req.params.id;
    console.log(id);

    req.getConnection(function (err, connection) {
        var query = connection.query("SELECT * FROM client WHERE idclient=?", [id], function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            console.log("client", rows);

            res.json(rows[0]);
        });
    });
};

exports.insertClient = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    console.log("in "+JSON.stringify(input));

    /*var now = new Date();
    var jour = now.getDate();
    var mois = now.getMonth()+1;
    var annee = now.getFullYear();
    var date = annee+"-"+mois+"-"+jour;
    console.log(date);
    
    var passhashed = null;
    bcrypt.hash(input.password, bcrypt.genSaltSync(8), null, function (err, hash) {
        passhashed = hash;
    });
    */

    req.getConnection(function (err, connection) {

        var data = {
            nom: input.nom,
            prenom: input.prenom,
            adresse1: input.adresse1,
            adresse2: input.adresse2,
            cp: input.cp,
            ville: input.ville,
            fixe: input.fixe,
            portable: input.portable,
            mail: input.mail
        };

        var query = connection.query("INSERT INTO client set ? ", data, function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);
            res.redirect('/');
        });
    });
};

exports.updateClient = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    var passhashed = null;
    bcrypt.hash(input.password, bcrypt.genSaltSync(8), null, function (err, hash) {
        passhashed = hash;
    });

    /*
    var now = new Date();
    var jour = now.getDate();
    var mois = now.getMonth()+1;
    var annee = now.getFullYear();
    var date = annee+"-"+mois+"-"+jour;
    */

    req.getConnection(function (err, connection) {

        var data = {
            nom: input.nom,
            prenom: input.prenom,
            adresse1: input.adresse1,
            adresse2: input.adresse2,
            cp: input.cp,
            ville: input.ville,
            fixe: input.fixe,
            portable: input.portable,
            mail: input.mail
        };

        var query = connection.query("UPDATE client set ? WHERE idclient = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');
        });
    });
};

exports.deleteClient = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM client  WHERE idclient = ? ", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');

        });
    });
};