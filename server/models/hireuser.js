const mongoose = require("mongoose");

const HireUserSchema = new mongoose.Schema({
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
	company: {
		type: Number,
		 required: true,
		 unique: true,
	},
	
    
});

const HireUser = mongoose.model("hireuser", HireUserSchema);

module.exports = HireUser;
