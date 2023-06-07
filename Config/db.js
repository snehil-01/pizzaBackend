const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://snehil:ssnehilv2002@cluster0.sffhey0.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
//   useUnifiedTopology: true
});
// mongoose.set('strictQuery', true);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;