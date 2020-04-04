const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  director_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, '`{PATH}` ALANI ZORUNLDUR!'],
    maxlength: [45, '`{PATH}` ALANI `{MAXLENGTH}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'],
    minlength: [1, '`{PATH}` ALANI `{MINLENGTH}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  category: {
    type: String,
    required: [true, '`{PATH}` ALANI ZORUNLDUR!'],
    maxlength: [35, '`{PATH}` ALANI `{MAXLENGTH}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'],
    minlength: [1, '`{PATH}` ALANI `{MINLENGTH}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  country: {
    type: String,
    maxlength: [35, '`{PATH}` ALANI `{MAXLENGTH}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'],
    minlength: [2, '`{PATH}` ALANI `{MINLENGTH}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  year: {
    type: Number,
    required: [true, '`{PATH}` ALANI ZORUNLDUR!'],
    max: [2030, '{PATH} ALANI `{MAX}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'],
    min: [1900, '`{PATH}` ALANI `{MIN}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  imdb_score: {
    type: Number,
    max: [10, '`{PATH}` ALANI `{MAX}` DEĞERİNDEN FAZLA OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`'],
    min: [1, '`{PATH}` ALANI `{MIN}` DEĞERİNDEN AZ OLAMAZ!  SİZİN GİRDİĞİNİZ DEĞER: `{VALUE}`']
  },
  DateOfUpload: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('movie', MovieSchema);
