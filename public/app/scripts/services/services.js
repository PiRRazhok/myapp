var arseniServices = angular.module('arseniServices', []);

arseniServices.service('User', ['$http', '$q',
 function ($http, $q) {
 	return ({//возвращаем объект (название: значение) (значение - название функции в сервисе)
 		enterance: enterance, 
 		registration: registration,
 		forum: forum,
 		loadForum: loadForum//название функции
 		// registration: registration,
 		// enterence: enterence,
 		// addlesson: addlesson,
 		// loadlessons: loadlessons,
 		// sendmess: sendmess
 	});

 	function registration (surname, name, fathername, login, adress, password) {
        console.log("registration services");
 		return $http({
 			method: 'post',
 			url: 'registration',
 			params: {
 				surname: surname,
 				name: name,
 				fathername: fathername,
 				login: login,
 				adress: adress,
 				password: password
 			}
 		});
 	}

 	function enterance (login, password) {//функция отправки http-запроса (метод - get)
 										// enter - название фцнкции обработки на сервере (index.js)
 		return  $http({					// login, password - параметры, передаваемые из контроллера
 			method: 'get',
 			url: 'enter',
 			params: {// передавём на сервер объект (название: значение) 
 				login: login,// (значение - берёи из параметров, переданный из контроллера())
 				password: password
 			}
 		});
 	}

 	 	function forum (login, date, message) {
 		return $http({
 			method: 'post',
 			url: 'addForumMessage',
 			params: {
 				login: login,
 				date: date,
 				message: message
 			}
 		});
 	}

 	function loadForum () {
 		return $http({
 			method: 'get',
 			url: 'loadForumMessages',
 			params: {}
 		});
 	}

 }]);