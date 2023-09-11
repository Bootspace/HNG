const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true
    },

    lastname: {
      type: String,
      required: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

// Creating Indexes for both fields
PersonSchema.index({ firstname: 1 });
PersonSchema.index({ lastname: 1 });

// Defining a vittual property for fullname
PersonSchema.virtual('fullname').get(function() {
  return `${this.firstname} ${this.lastname}`;
});

// Setting the virtual property to be included in JSON representation of the document
PersonSchema.set('toJSON', {virtuals: true });

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;