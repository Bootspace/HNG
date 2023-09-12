const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


// Defining a vittual property for fullname
// PersonSchema.virtual('fullname').get(function() {
//   return `${this.firstname} ${this.lastname}`;
// });

// Setting the virtual property to be included in JSON representation of the document
// PersonSchema.set('toJSON', {virtuals: true });

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;