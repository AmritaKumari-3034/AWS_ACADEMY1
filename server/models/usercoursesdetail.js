const mongoose = require("mongoose");

const CoursesDetailSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
		min: 2,
		max: 100,
	},
	
	email: {
		type: String,
		required: true,
		min: 4,
		max: 100,
		unique: true,
	},
	
	phone: {
		type: Number,
		 required: true,
		 unique: true,
	},
	courses: {
		type: Number,
		 required: true,
		 unique: true,
	},
	
    
});

const UserCoursesDetails = mongoose.model("coursesuser", CoursesDetailSchema);

module.exports = UserCoursesDetails;
