const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  name: {
    type: String,
    required: [true, '`{PATH}` ALANI ZORUNLDUR!'],
    maxlength: [50, '`{PATH}` ALANI `{MAXLENGTH}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'], 
    minlength: [2, '`{PATH}` ALANI `{MINLENGTH}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'] 
  },
  surname: {
    type: String,
    required: [true, '`{PATH}` ALANI ZORUNLDUR!'],
    maxlength: [35, '`{PATH}` ALANI `{MAXLENGTH}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'], 
    minlength: [2, '`{PATH}` ALANI `{MINLENGTH}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  bio: {
    type: String,
    maxlength: [510, '`{PATH}` ALANI `{MAXLENGTH}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'],
    minlength: [25, '`{PATH}` ALANI `{MINLENGTH}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  DateOfUpload: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('director', DirectorSchema);
