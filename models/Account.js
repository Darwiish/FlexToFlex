const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const AccountSchema = new Schema({
  accountHolder: {
    type: String,
    required: false
  },
  accountType: {
    type: String,
    required: false
  },
//   accountNumber: {
//     type: Number,
//     required: false
//   },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Account = mongoose.model("account", AccountSchema);

module.exports = Account;
