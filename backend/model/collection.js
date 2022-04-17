const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
	title: {
		type: String
	},
	category: {
		type: String
	},
	context: {
		type: String
	}
})

module.exports = collectionSchema
