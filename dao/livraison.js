/*
 * GET users listing.
 */
var bcrypt = require('bcrypt-nodejs');

exports.selectAllLivraison = function (req, res) {

    req.getConnection(function (err, connection) {

        if (err)
            console.log("Error Selecting : %s ", err);

        var query = connection.query('SELECT * FROM livraison', function (err, rows) {
            res.json(rows);
        });
    });

};

exports.selectLivraisonById = function (req, res) {

    var id = req.params.id;
    console.log(id);

    req.getConnection(function (err, connection) {
        var query = connection.query("SELECT * FROM livraison WHERE idlivraison=?", [id], function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            console.log("client", rows);

            res.json(rows[0]);
        });
    });
};

exports.insertLivraison = function (req, res) {

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
            date: input.date,
            lieu: input.lieu
        };

        var query = connection.query("INSERT INTO livraison set ? ", data, function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);
            res.redirect('/');
        });
    });
};

exports.updateLivraison = function (req, res) {

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
            date: input.date,
            lieu: input.lieu
        };

        var query = connection.query("UPDATE livraison set ? WHERE idlivraison = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');
        });
    });
};

exports.deleteLivraison = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM livraison  WHERE idlivraison = ? ", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');

        });
    });
};