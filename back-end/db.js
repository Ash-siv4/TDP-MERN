const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/TDP-DB', { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err);
  return console.log('Connection successful');
});

const trainerSchema = new Schema({
  name: {
    type: String,
    min: 2,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 65,
    required: true,
  },
  specialism: String,
});

const Trainer = mongoose.model('trainer', trainerSchema);

module.exports = Trainer;
