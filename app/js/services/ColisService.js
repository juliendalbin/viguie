PCIE.factory("colisService", function($q, $http) {

	return {

		selectAll : function () {
			var deffered = $q.defer();
			$http.get('colis').then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    selectColisById : function (idColis) {
			var deffered = $q.defer();
			$http.get('api/colis'+idColis).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    insertColis : function (colis) {
			var deffered = $q.defer();
			$http.post('api/colis',colis).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    updateColis : function (idColis,colis) {
			var deffered = $q.defer();
			$http.put('api/colis'+idColis,colis).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    deleteColis : function (idColis) {
			var deffered = $q.defer();
			$http.delete('api/colis'+idColis).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    }
	}
});
