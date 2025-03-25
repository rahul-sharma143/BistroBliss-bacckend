import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
