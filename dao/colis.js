/*
 * GET users listing.
 */
var bcrypt = require('bcrypt-nodejs');

exports.selectAllColis = function (req, res) {

    req.getConnection(function (err, connection) {

        if (err)
            console.log("Error Selecting : %s ", err);

        var query = connection.query('SELECT * FROM colis', function (err, rows) {
            res.json(rows);
        });
    });

};

exports.selectColisById = function (req, res) {

    var id = req.params.id;
    console.log(id);

    req.getConnection(function (err, connection) {
        var query = connection.query("SELECT * FROM colis WHERE idcolis=?", [id], function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            console.log("client", rows);

            res.json(rows[0]);
        });
    });
};

exports.insertColis = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    console.log("in "+JSON.stringify(input));
   
   /*
    var passhashed = null;
    bcrypt.hash(input.password, bcrypt.genSaltSync(8), null, function (err, hash) {
        passhashed = hash;
    });
    */

    req.getConnection(function (err, connection) {

        var data = {
            nomColis: input.nomColis,
            description: input.description
        };

        var query = connection.query("INSERT INTO colis set ? ", data, function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);
            res.redirect('/');
        });
    });
};

exports.updateColis = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    /*
    var passhashed = null;
    bcrypt.hash(input.password, bcrypt.genSaltSync(8), null, function (err, hash) {
        passhashed = hash;
    });
    */

    req.getConnection(function (err, connection) {

        var data = {
            nomColis: input.nomColis,
            description: input.description
        };

        var query = connection.query("UPDATE colis set ? WHERE idcolis = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');
        });
    });
};

exports.deleteColis = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM colis  WHERE idcolis = ? ", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');

        });
    });
};