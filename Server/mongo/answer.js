const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
	question_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	course_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	answers: {
		type: Array,
	},
	correct_Answer: {
		type: String,
	},
});

module.exports = mongoose.model('answer', answerSchema);
