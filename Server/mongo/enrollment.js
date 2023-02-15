const mongoose = require('mongoose');

const EnrllomentSchema = new mongoose.Schema({
	course_id: {
		type: String,
		isRequire: true,
	},
	user_id: {
		type: String,
		isRequire: true,
	},
});
module.exports = mongoose.model('enrollmentDocs', EnrllomentSchema);
