var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs');

var articles = [{title: 'Life of Pie'}];

////////////////////////////////////////////////////

app.get('/articles/index', function(req, res) {
	var object = {
			articles: articles
		}
	res.render('articles/index', object)
})

app.get('/articles/new', function(req, res){
	res.render('articles/new')
})

app.post('/articles', function(req, res) {
	articles.push(req.body)
	res.render('articles/thankyou')
})

app.get('/articles/:id', function(req, res){
	var index = req.params.id
	res.render('articles/id', articles[index])
})

// app.get('/articles/about', function(req, res){
// 	res.send('find an article by id in the array of articles and display it.');
// })

// app.get('/articles/contact', function(req, res){
// 	res.send('find an article by id in the array of articles and display it.');
// })


app.listen(3000);

