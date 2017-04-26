PCIE.factory("clientService", function($q, $http) {

	return {

		selectAll : function () {
			var deffered = $q.defer();
			$http.get('client').then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    selectClientById : function (idClient) {
			var deffered = $q.defer();
			$http.get('api/client'+idClient).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    insertClient : function (client) {
			var deffered = $q.defer();
			$http.post('api/client',client).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    updateClient : function (idClient,client) {
			var deffered = $q.defer();
			$http.put('api/client'+idClient,client).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    },
	    deleteClient : function (idClient) {
			var deffered = $q.defer();
			$http.delete('api/client'+idClient).then(function (success){
				deffered.resolve(success.data);
			},function (error){
				deferred.reject(error);
			});
			return deffered.promise;
	    }
	}
});
