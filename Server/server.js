const express = require('express');
const mongoose = require('mongoose');
const student = require('./student');
const dotenv = require('dotenv');
// const User = require('./mongo/photo');
const enrollment = require('./mongo/enrollment');
const { User, Blog } = require('./mongo/photo');
const app = express();
// const enrollment = require('./mongo/enrollment');
const crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
const js = require('./mongo/javascript');
const Razorpay = require('razorpay');
app.use(bodyParser.json());
// const course = require('./course.json');
// After you declare "app"
const course = require('./mongo/course');
app.use(session({ secret: 'melody hensley is my spirit animal' }));
var cors = require('cors');
const javascript = require('./mongo/javascript');
const python = require('./mongo/python');

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
app.get('/js', async (req, res) => {
	const data = await javascript.find();
	res.send(data);
});
app.get('/python', async (req, res) => {
	const data = await python.find();
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

	console.log('logIndetails', user);

	async function getRelate() {
		if (data.length > 0) {
			const result = await enrollment.aggregate([
				{
					$lookup: {
						from: 'javascripts',
						localField: 'course_id',
						foreignField: '_id',
						as: 'enrolled_courses',
					},
				},
			]);

			console.log('send', result);
		}
	}
	getRelate();
});
// payment apis

var razorpay = new Razorpay({
	key_id: 'rzp_test_LUoWzQJZYjdLNB',
	key_secret: 'gAz9uhd7QvbNqLYP6DT3rHHn',
});
app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'));
});

app.post('/verification', async (req, res) => {
	console.log('req', req.body);
	try {
		const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
			req.body;

		// Pass yours key_secret here
		const key_secret = 'gAz9uhd7QvbNqLYP6DT3rHHn';

		// Creating hmac object
		let hmac = crypto.createHmac('sha256', key_secret);

		// Passing the data to be hashed
		hmac.update(razorpay_order_id + '|' + razorpay_payment_id);

		// Creating the hmac in the required format
		const generated_signature = hmac.digest('hex');
		if (razorpay_signature === generated_signature) {
			res.json({ success: true, message: 'Payment has been verified' });
		} else {
			console.log('sign failed', razorpay_order_id);
			res.json({ success: false, message: 'Payment verification failed' });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post('/razorpay', async (req, res) => {
	console.log('body', req.body);
	let { data } = req.body;
	// var amount = data?.reduce(function (sum, number) {
	// 	const updatedSum = sum + number.price;
	// 	return updatedSum;
	// }, 0);

	// console.log('total amount', data);
	const payment_capture = 1;
	const amount = req.body.data;
	const currency = 'INR';

	const options = {
		amount: amount * 100,
		currency,
		// receipt: shortid.generate(),
		payment_capture,
	};

	try {
		const response = await razorpay.orders.create(options);
		console.log(response);
		res.status(200).json({
			id: response.id,
			currency: response.currency,
			amount: amount,
		});
	} catch (err) {
		console.log(err);
	}
});
app.post('/enrolling_user', async (req, res) => {
	let { user_id, course_id } = req.body;
	// let dt = await student
	// 	.findOne({ _id: req.body?.user_id })
	// 	.populate('courses');
	// res.send(dt);
	// let dt = User.findOne({ _id: req.body?.user_id })
	// 	.populate({ path: 'blogs', model: Blog })
	// 	.exec(function (err, packages) {
	// 		if (err) next(err);
	// 		else res.status(200).json(packages);
	// 	});
	// console.log('dit', dt);
	// (function () {
	// 	const result = User.aggregate([
	// 		{
	// 			$lookup: {
	// 				from: 'authors',
	// 				localField: '_id',
	// 				foreignField: req.body.user_id,
	// 				as: 'enrolled_courses',
	// 			},
	// 		},
	// 	]);
	// 	console.log('result', result);
	// })();
	let enrlmt = new enrollment({
		course_id: course_id,
		user_id: user_id,
	});
	let saved = await enrlmt.save();

	res.send({ saveData: saved });
});

app.listen(8000, () => console.log('server running at 8000'));
