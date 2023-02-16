const mongoose = require('mongoose');

const EnrllomentSchema = new mongoose.Schema({
	course_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
});
module.exports = mongoose.model('enrollmentDocs', EnrllomentSchema);
