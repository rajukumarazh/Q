const express = require('express');
const mongoose = require('mongoose');
const student = require('./student');
const dotenv = require('dotenv');
// dotenv.config({ path: __dirname + '/.env' });
const app = express();

const uri =
	'mongodb+srv://raju:Ra%409058837496@cluster0.kjkyk5j.mongodb.net/cluster0?retryWrites=true&w=majority';
// mongodb+srv://raju:<password>@cluster0.uwtgdvq.mongodb.net/test
// mongodb+srv://raju:<password>@cluster0.uwtgdvq.mongodb.net/test
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.get('/user', async (req, res) => {
	// const data = await user.find();
	// res.send(data);
	// console.log('data', data);
	const data = new student({
		email: 'req.body.email',
		password: 124536,
	});
	let rest = data.save();
	res.send(rest);
});
// const app=expres();

app.listen(8000, () => console.log('server running at 8000'));
