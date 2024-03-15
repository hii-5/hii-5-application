const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College'
  },
  branch: {
    type: String
  },
  presentCollegeYear: {
    type: Number
  },
  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel'
  },
  mess: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mess'
  },
  club: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club'
  }],
  isClassMonitor: {
    type: Boolean,
    default: false
  },
  isClubAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
