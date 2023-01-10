const express = require('express');
const mongoose = require('mongoose');
const student = require('./student');
const dotenv = require('dotenv');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
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
		user
			.findOne({ email: username })
			.then((user) => {
				if (!user) {
					return done(null, false, { message: 'user incorrect' });
				}
				if (!user.password == password) {
					return done(null, false, { message: 'password incorrect' });
				}
				return done(null, user);

				// Function defined at bottom of app.js
				const isValid = validPassword(password, user.hash, user.salt);

				if (isValid) {
					return cb(null, user);
				} else {
					return cb(null, false);
				}
			})
			.catch((err) => {
				cb(err);
			});
	})
);
mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.get('/user', async (req, res) => {
	res.send({ response: 'all fine' });
});
// const app=expres();
//passport check

app.listen(8000, () => console.log('server running at 8000'));
