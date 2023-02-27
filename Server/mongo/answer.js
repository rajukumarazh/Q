const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
	question_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	answer: {
		type: String,
	},
});

module.exports = mongoose.model('answer', answerSchema);
