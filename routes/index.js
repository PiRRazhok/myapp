var express = require('express'); // подключаем пакет express
var router = express.Router(); 
var mysql = require('mysql'); // подключаем пакет mysql
var db = mysql.createConnection({ // подключамся к бд
  host:     '127.0.0.1',
  user:     'root',
  password: '',
  database: 'jes' // название бд
});


// сервер. Здесь все происходит :)
module.exports = function(passport) { // модуль, созданный express-генератором

	// router.get('/', function(req, res) {
	// 	res.sendfile("public/app/index.html");
	// });
	
	router.get('/enter', function(req, res) { // функция проверки наличия пользователя и пароля
		// console.log(req.param('login'));
		// console.log(req.param('password'));
		var query = "SELECT * FROM users " + 				// создаёт строку запроса ан SQL
				    "WHERE login='" + req.param('login') +
				    "' AND password='" + req.param('password') + "'";
		db.query(query, function(err, result) {				// делаем запрос в баду данных
			if (err) console.log("Error in db.query in '/enter' "); // в параметрах запрос
			// console.log(result);									// и функция callback (ответа)
			// console.log(query);
			if (result !== undefined) {
				if (result.length === 0) res.json(null); // если результат выборки из бд пустой - значит такого нет (возможно ошибка при вводе)
				else res.json(result); // но если такой есть, то отправляем его обратно
			}
		});
	});

	router.post('/registration', function(req, res) {
		console.log("registration server");
		//req.set({ 'content-type': 'application/json; charset=utf-8' });
		//res.set({ 'content-type': 'application/json; charset=utf-8' });
		var query1 = "SELECT * FROM users" + " WHERE login='" + req.param('login') + "'";
		var query2 = "INSERT INTO users (surname, name, fatherName, adress, login, password) " +
		"VALUES ('" + req.param('surname') + "', '" +
					req.param('name') + "', '" +
					req.param('fathername') +"', '" +
					req.param('adress') + "', '" +
					req.param('login') + "', '" +
					req.param('password') + "')";
		console.log(query2);
		//db.query("SET CHARACTER SET cp1251");
		db.query(query1, function(err, res1){
			if (err) console.log("Error in db.query in '/registraiton' 1 ");
			console.log("db.query1");
			console.log(res1);
			if (res1 !== undefined) {
				//db.query("SET CHARACTER SET cp1251");
				if (res1.length === 0)
					db.query(query2, function(err, res2) {
						console.log("db.query2");
						if (err) console.log("Error in db.query in '/registraiton' 2 ");
						else {
							console.log("Пользователь добавлен в базу данных");
							res.json(res2);
						}
					});
			} else {
				console.log("Такой пользователь уже существует или ошибка");
				res.json("Такой пользователь уже существует")
			}
		});
	});

	router.post('/addForumMessage', function(req, res) {
		var query = "INSERT INTO forum (message, date, userLogin) " +
		"VALUES ('" + req.param('login') + "', '" +
					req.param('date') + "', '" +
					req.param('message') + "')";
		db.query(query, function(err, result) {
			if (err) console.log("Error in db.query in '/addForumMessage'");
			else console.log("сообщение записано в бд");
		})
	});

	router.get('/loadForumMessages', function(req, res) {
		var query = "SELECT message, date, userLogin FROM forum";
		db.query(query, function(err, result) {
			if (err) console.log("Error in db.query in '/loadForumMessages'");
			else {
				console.log("все ок");
				res.json(result);
			}
		});
	});

	// шаблон функции
	// router.post или router.get
	// router.get('/название_функции', function(req, res) { // req - reques(запрос), res - response(ответ)
	// 	// создайм строку запроса на языке SQL
	// 	var query = "бла бла бла";
	// 	// делаем запрос в базу данных
	// 	db.query(query, function(err, result) {
	// 		if (err) // пишешь, что делать, если возникнет ошибка
	// 		// потом пишешь, что делать с результатом выборки - result
	// 		// отправить что-нибудь можно с помощью функции res.json(что_отправить);
	// 	});
	// });

	return router;
}
