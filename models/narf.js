const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NarfSchema = new Schema({
	name: String,
	photo: String,
	description: String,
	score: Number,
});

module.exports = mongoose.model('narf', NarfSchema);