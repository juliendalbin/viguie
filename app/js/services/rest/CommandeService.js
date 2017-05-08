app.factory("commandeService", function($q, $http) {

	return {

		selectAll : function () {
			var deffered = $q.defer();
			$http.get('commande').then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    selectCommandeById : function (idCommande) {
			var deffered = $q.defer();
			$http.get('api/commande'+idCommande).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    insertCommande : function (commande) {
			var deffered = $q.defer();
			$http.post('api/commande',commande).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    updateCommande : function (idCommande,commande) {
			var deffered = $q.defer();
			$http.put('api/commande'+idCommande,commande).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    deleteCommande : function (idCommande) {
			var deffered = $q.defer();
			$http.delete('api/commande'+idCommande).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    }
	}
});
