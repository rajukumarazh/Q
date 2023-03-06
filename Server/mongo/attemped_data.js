const mongoose = require('mongoose');

const attemptsSchem = new mongoose.Schema({
	// question_id: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// },
	course_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	// answers: {
	// 	type: Array,
	// },
	// correct_Answer: {
	// 	type: String,
	// },
});

module.exports = mongoose.model('attempted', attemptsSchem);
