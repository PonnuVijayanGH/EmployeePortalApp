var empApp = angular.module("empApp", ['ngRoute', 'employeePortalControllers', 'employeeServices']);
empApp.config(['$routeProvider','$httpProvider',
	function($routeProvider,$httpProvider){
		$routeProvider.
		when('/home',{
			templateUrl : 'partials/EmployeeList',
			controller : 'EmployeeListContrl'
		}).
		when('/home/:eid',{
			templateUrl : 'partials/EmployeeDetail',
			controller : 'EmployeeDetailContrl'
		}).
		when('/manage',{
			templateUrl : 'partials/EmployeeList',
			controller : 'EmployeeListContrl'
		}).
		when('/manage/:eid',{
			templateUrl : 'partials/EditEmployeeDetail',
			controller : 'EmployeeDetailContrl'
		}).
		when('/add',{
			templateUrl : 'partials/AddEmployee',
			controller : 'EmployeeDetailContrl'
		}).
		otherwise({
			redirectTo : '/home'
		});

// 		$httpProvider.defaults.headers.post["Content-Type"] = 
//     "application/x-www-form-urlencoded; charset=UTF-8;";

//     $httpProvider.interceptors.push(['$q', function($q) {
//     return {
//         request: function(config) {
//             if (config.data && typeof config.data === 'object') {
//                 // Check https://gist.github.com/brunoscopelliti/7492579 
//                 // for a possible way to implement the serialize function.
//                 config.data = serialize(config.data);
//             }
//             return config || $q.when(config);
//         }
//     };
// }]);
		// $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
 
	 //  /**
	 //   * The workhorse; converts an object to x-www-form-urlencoded serialization.
	 //   * @param {Object} obj
	 //   * @return {String}
	 //   */
	 //  var param = function(obj) {
	 //    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
	      
	 //    for(name in obj) {
	 //      value = obj[name];
	        
	 //      if(value instanceof Array) {
	 //        for(i=0; i<value.length; ++i) {
	 //          subValue = value[i];
	 //          fullSubName = name + '[' + i + ']';
	 //          innerObj = {};
	 //          innerObj[fullSubName] = subValue;
	 //          query += param(innerObj) + '&';
	 //        }
	 //      }
	 //      else if(value instanceof Object) {
	 //        for(subName in value) {
	 //          subValue = value[subName];
	 //          fullSubName = name + '[' + subName + ']';
	 //          innerObj = {};
	 //          innerObj[fullSubName] = subValue;
	 //          query += param(innerObj) + '&';
	 //        }
	 //      }
	 //      else if(value !== undefined && value !== null)
	 //        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	 //    }
	      
	 //    return query.length ? query.substr(0, query.length - 1) : query;
	 //  };
	 
	 //  // Override $http service's default transformRequest
	 //  $httpProvider.defaults.transformRequest = [function(data) {
	 //    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	 //  }];
	}]);