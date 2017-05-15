app.factory("livraisonService", function($q, $http) {

	return {

		selectAll : function () {
			var deffered = $q.defer();
			$http.get('livraison').then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    selectLivraisonById : function (idLivraison) {
			var deffered = $q.defer();
			$http.get('api/livraison'+idLivraison).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    insertLivraison : function (livraison) {
			var deffered = $q.defer();
			$http.post('api/livraison',livraison).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    updateLivraison : function (idLivraison,livraison) {
			var deffered = $q.defer();
			$http.put('api/livraison'+idLivraison,livraison).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    deleteLivraison : function (idLivraison) {
			var deffered = $q.defer();
			$http.delete('api/livraison'+idLivraison).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    }
	}
});
