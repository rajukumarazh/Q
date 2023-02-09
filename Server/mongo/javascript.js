const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	course_name: {
		type: String,
	},
	course_price: {
		type: Number,
	},
	category: {
		type: String,
	},
	duration: {
		type: String,
	},
	duration_daily: {
		type: String,
	},
	isLive: {
		type: Boolean,
	},
	isDownloadable: {
		type: Boolean,
	},
	enrolled_user: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'student',
		},
	],
});

module.exports = mongoose.model('javascript', courseSchema);
