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
	students: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'student',
			required: true,
		},
	],
});

module.exports = mongoose.model('course', courseSchema);

// {
//     "course_name": "wordpress",
//     "course_price": "2500",
//     "category": "Web-Development",
//     "duration": "10 week",
//     "duration_daily": "2 hour",
//     "isLive": "true",
//     "isDownloadable": "false"
// }
