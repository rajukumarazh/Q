const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
	course: {
		type: mongoose.Schema.Types.ObjectId,
	},
	question: {
		type: String,
	},
	chapter: {
		type: String,
	},
	// answerd_by: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'answer',
	// },
});

module.exports = mongoose.model('question', questSchema);
