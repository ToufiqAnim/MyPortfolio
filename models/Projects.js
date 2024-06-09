
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: String,
  images: Array,
  github: String,
  live: String,
  demoImage:String
});

module.exports = mongoose.model('Project', projectSchema);
