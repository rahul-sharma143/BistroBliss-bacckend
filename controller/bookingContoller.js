import Booking from "../modals/booking.js";

export const postBooking = async (req, res) => {
  const { date, time, name, phone, totalPersons } = req.body;
  try {
    const bookingObj = {
      date,
      time,
      name,
      phone,
      totalPersons,
    };
    const newBooking = new Booking(bookingObj);

    await newBooking.save();
    res.status(201).send({ message: "Booking successful!" });
  } catch (err) {
    res.status(500).send({ message: "Error saving booking" });
  }
};
export const getBooking = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};