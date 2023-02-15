const mongoose = require('mongoose');
const course = require('../Server/mongo/course');
const javascript = require('../Server/mongo/javascript');
const dataSchema = new mongoose.Schema({
	email: {
		required: true,
		type: String,
	},
	password: {
		required: true,
		type: String,
	},
});

module.exports = mongoose.model('student', dataSchema);
