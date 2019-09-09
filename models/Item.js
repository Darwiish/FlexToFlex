const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema=new Schema({
	name: {
		type: String,
		required: false
	},
	transactionType: {
		type: String,
		required: false
	},
	amount: {
		type: Number,
		required: false
	},
	accountNumber: {
		type: Number,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}

});

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;

