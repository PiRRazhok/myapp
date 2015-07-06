
mForum = [];

var Ctrl = angular.module('Ctrl', ['arseniServices']);

Ctrl.controller('Ctrl', ['$location', '$scope', 'User',
	function ($location, $scope, User) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    // console.log("я контроллер");

    $scope.enter = function() {
    	User.enterance($scope.login, $scope.password).then(function(data) {
        //запрос на сервер, проверка 
        // имени пользователя и пароля
        // $scope.login, $scope.password
        // берутся из формы
        // из ng-model="login" и 
        // ng-model="password"
            //console.log(data.data === "null");
            //console.log(data.data);//возвращает все данные о пользователе
            //вернёт объект, который можно увидеть в консоли
            //если объект = null, значит такого пользователя нет в бд
            //следовательно нужно сообщить об ошибке
		  if (data.data == "null") {
            alert("Не верные имя пользователя или пароль");
            // $("form").reset();
            $("input:password").val("");
            $("input:text").val('');
          } else {
            console.log("all is ok");
            $location.path("/");
            $.cookie("userLogin",$scope.login);
            // $.cookie("userLogin",null);
            // $.cookie("userLogin");
          };
        });
    }
    
    $scope.register = function() {
        console.log("register controller");
        User.registration($scope.surname, $scope._name, 
                        $scope.fathername, $scope.login, 
                        $scope.adress, $scope.password).then(function(data) {
            console.log(data.data);
            $.cookie("userLogin",$scope.login);
        });
    }

    $scope.forum = function() {
        if($.cookie("userLogin")) {
            var d = new Date();
            var date = "" + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " +
                        d.toLocaleTimeString();
            User.forum($.cookie("userLogin"), date, $scope.message).then(function(data){
                console.log("надеюсь, сообщение добавлено в бд");
            });
        } else {
            alert("Нужно войти в систему!!!")
        }
    }

    $scope.forumMessages = mForum;
    $scope.loadForum = function() {
        $scope.forumMessages = mForum;
        User.loadForum().then(function(data) {
            mForum = data.data;
            console.log(data.data);
        });
        $scope.forumMessages = mForum;
    }
    $scope.forumMessages = mForum;

    // шаблон функции в контроллере
    // $scope.название_функции = function() {
    //     User.название_йункции_в_sevises.js(параметры).then(function(data) {
    //         data.data - это то, что вернёт сервер
    //         с этим можешь делать всё, что тебе будет нужно
    //     });
    //     помимо запроса на сервер ты так же можешь написать
    //     что-нибудь ещё
    // }
        console.log($scope.forumMessages);

  }]);
