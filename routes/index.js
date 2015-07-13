var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
	var datos = {
		nombre    : "Alberto",
		apellidos : "Montenegro Sejas",
		profesion : "Ing. de Sistemas",
		foto      : "image/foto.jpg"
	}
  	res.render('index', datos);
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
