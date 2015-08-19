var models = require('../models/models.js');

exports.create = function(req, res){
	var quiz = models.Quiz.build(req.body.quiz);
	quiz.validate().then(function(err){
		if (err) {
			res.render('quizes/new', {quiz : quiz, errors : err.errors})
		}else{
			quiz.save({fields:["pregunta", "respuesta", "categoria"]}).then(function(){
				res.redirect('/quizes');
			});
		}
	});
}

exports.new = function(req, res){
	var quiz = models.Quiz.build({pregunta:"Pregunta", respuesta: "Respuesta", categoria : "Categoria"});
	res.render("quizes/new", {quiz:quiz, errors : []});
}

exports.load = function(req, res, next, quizID){
	models.Quiz.find(quizId).then(
		function(quiz){
			if (quiz) {
				req.quiz = quiz;
				next();
			}else {
				next(new Error('No existe quizId= '+ quizIS));
			}
		}
	);
}

exports.edit = function(req, res){
	var quiz = req.quiz;
	res.render('quizes/edit', {quiz:quiz, errors : []})
}

exports.update = function(req, res){
	req.quiz.pregunta = req.body.quiz.pregunta;
	req.quiz.respuesta = req.body.quiz.respuesta;
	req.quiz.categoria = req.body.quiz.categoria;

	req.quiz
	.validate()
	.then(
		function(err){
			if (err) {
				res.render('quizes/edit', {quiz: req.quiz, errors: err.errors});
			}else{
				req.quiz
				.save({fields : ["pregunta", "respuesta", "categoria"]})
				.then(function(){res.redirect("/quizes");});
			}
		}
	)
}

exports.index = function(req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs', {quizes : quizes, errors : []});
	});
}

exports.destroy = function(req, res){
	req.quiz.destroy.then(function(){
		res.redirect('/quizes');
	}).catch(function(error){next(error)});
}

exports.show = function(req, res){
	res.render('quizes/show', {quiz : req.quiz, errors : []});
}

exports.answer = function (req, res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta === req.quiz.respuesta) {
		resultado = "Correcto";
	}
	res.render('quizes/answer', {quiz : req.quiz, respuesta : resultado, errors : []});
}


// exports.question = function (req, res) {
// 	models.Quiz.findAll().success(function(quiz){
// 	res.render('quizes/question' , {pregunta : quiz[0].pregunta});		
// 	});
// }
