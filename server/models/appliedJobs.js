const mongoose = require('mongoose');

const appliedJobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  employee: {
    type:String,
    required: true,
  },
  resumeLink: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  additionalInformation: {
    type: String,
    required: true,
  },
  offered: {
    type: Boolean,
    default: false,
  },
});

const AppliedJob = mongoose.model('AppliedJob', appliedJobSchema);

module.exports = AppliedJob;