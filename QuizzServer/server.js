const express = require('express');
const mongoose = require('mongoose');
const user = require('./user');
const app = express();
const uri =
	'mongodb+srv://raju:Ra%409058837496@crud.kjkyk5j.mongodb.net/cluster0?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.get('/user', async (req, res) => {
	const data = await user.find();
	res.send(data);
	console.log('data', data);
});
// const app=expres();

app.listen(8000, () => console.log('server running at 8000'));
