const express = require('express');
const mongoose = require('mongoose');
const student = require('./student');
const dotenv = require('dotenv');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
app.use(bodyParser.json());
// const course = require('./course.json');
// After you declare "app"
const course = require('./mongo/course');
app.use(session({ secret: 'melody hensley is my spirit animal' }));
var cors = require('cors');
app.use(cors());
const uri =
	'mongodb+srv://raju:Ra%409058837496@cluster0.kjkyk5j.mongodb.net/cluster0?retryWrites=true&w=majority';
// mongodb+srv://raju:<password>@cluster0.uwtgdvq.mongodb.net/test
// mongodb+srv://raju:<password>@cluster0.uwtgdvq.mongodb.net/test
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
app.use(passport.initialize());
app.use(passport.session());
passport.use(
	new LocalStrategy(function (email, password, done) {
		console.log(email, password);
		student.findOne({ email: email }, function (err, std) {
			if (err) {
				return done(err);
			}
			if (!std) {
				return done(null, false);
			}
			if (!std.password == password) {
				return done(null, false);
			}
			return done(null, std);
		});
	})
);
app.post('/login', passport.authenticate('local'), function (req, res) {
	console.log('hello');
	res.send(res);
});
passport.serializeUser((std, done) => {
	if (std) {
		return done(null, user.id);
	}
	return done(null, std.id);
});
passport.deserializeUser((id, done) => {
	student.findById(id, (err, std) => {
		if (err) {
			return done(null, false);
		}
		return done(null, std);
	});
});
mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.get('/user', async (req, res) => {
	res.send({ response: 'all fine' });
});
app.get('/all', async (req, res) => {
	const data = await course.find();
	// console.log('data', data);
	res.send(data);
});
/// signup student

app.post('/signup', async (req, res) => {
	console.log('res', req.body);
	const data = new student({
		email: req.body.email,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
	});
	const dataToSave = data.save();
	res.status(200).json(dataToSave);
});
// app.post('/login', async (req, res) => {
// 	console.log('user', req.body);
// 	const { email, password } = req.body;

// 	// const data = await student.find();
// 	// const user = data.filter((u) => {
// 	// 	if (u.email == email && u.password == password) {
// 	// 		return u;
// 	// 	}
// 	// });

// });
app.post('/log', async (req, res) => {
	console.log('res', req.body);
	const data = await student.find();
	const user = data?.filter((u) => {
		if (u.email == req.body.email && u.password == req.body.password) {
			return u;
		}
	});
	const accessToken = jwt.sign(
		{ username: user[0]?.email, paasword: user[0]?.password },
		accessTokenSecret
	);
	user.length > 0 && res.json({ token: accessToken, user: user });

	console.log('token', accessToken);
	console.log('logo', user);
});

app.listen(8000, () => console.log('server running at 8000'));
