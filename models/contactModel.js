const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    },
    name: {
      type: String,
      required: [true, "must have name!"],
    },
    email: {
      type: String,
      required: [true, "must have email!"],
    },
    phone: {
      type: String,
      required: [true, "must have phone number!"],
    },
  },
  { timestamps: true } // enable automatic timestamps
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
