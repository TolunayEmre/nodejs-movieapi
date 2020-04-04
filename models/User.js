const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, '`{PATH}` ALANI ZORUNLUDUR!'],
    unique: true
  },
  password: {
    type: String,
    required: [true, '`{PATH}` ALANI ZORUNLUDUR!']
  }
})

module.exports = mongoose.model('user', UserSchema);
