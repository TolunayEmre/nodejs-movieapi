const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://admin:1234admin@ds213759.mlab.com:13759/heroku_lv7873tg', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
  });

  mongoose.connection.on('open', (req, res) => {
    console.log('MongoDB Connection Successful!')
  })
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB Connection Failed! Error: ', err)
  })

  mongoose.Promise = global.Promise; 
}
