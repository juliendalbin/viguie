/*
 * GET users listing.
 */
var bcrypt = require('bcrypt-nodejs');

exports.selectAllCommande = function (req, res) {

    req.getConnection(function (err, connection) {

        if (err)
            console.log("Error Selecting : %s ", err);

        var query = connection.query('SELECT * FROM commande', function (err, rows) {
            res.json(rows);
        });
    });

};

exports.selectCommandeById = function (req, res) {

    var id = req.params.id;
    console.log(id);

    req.getConnection(function (err, connection) {
        var query = connection.query("SELECT * FROM commande WHERE idcommande=?", [id], function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            console.log("client", rows);

            res.json(rows[0]);
        });
    });
};

exports.insertCommande = function (req, res) {

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
            dateCommande: input.dateCommande,
            dateLivraison: input.dateLivraison,
            lieuLivraison: input.lieuLivraison,
            quantite: input.quantite,
            client_idclient: input.client_idclient,
            colis_idcolis: input.colis_idcolis
        };

        var query = connection.query("INSERT INTO commande set ? ", data, function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);
            res.redirect('/');
        });
    });
};

exports.updateCommande = function (req, res) {

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
            dateCommande: input.dateCommande,
            dateLivraison: input.dateLivraison,
            lieuLivraison: input.lieuLivraison,
            quantite: input.quantite,
            client_idclient: input.client_idclient,
            colis_idcolis: input.colis_idcolis
        };

        var query = connection.query("UPDATE commande set ? WHERE idcommande = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');
        });
    });
};

exports.deleteCommande = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM commande  WHERE idcommande = ? ", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/');

        });
    });
};