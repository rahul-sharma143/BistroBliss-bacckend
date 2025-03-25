import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new Schema({
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  totalPersons: {
    type: Number,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
