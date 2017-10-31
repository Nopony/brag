import * as express from "express"
let app = express();
console.log("Hello, typescript");

app.use(express.static('public/'));

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.redirect('/me')
});

app.get('/experience', (req, res, next) => {
	res.render('experience')
});

app.get('/me', (req, res, next) => {
	res.render('me')
});

app.get('/contact', (req, res, next) => {
	res.render('contact')
});

app.get('/projects', (req, res, next) => {
	res.render('projects')
});

app.listen(3000, function (err: Error) {
	if(err) console.log(err);
});