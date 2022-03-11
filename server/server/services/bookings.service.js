import Booking from "../models/bookings";

const saveBookingToDB = (booking) => {
  const newBooking = new Booking(booking);
  const promise = newBooking.save();
  // This will hit the DB and save the data
  return promise;
  // then and catch will be in this promise object
};

const getBookingsByUserId = (userid) => {
  const promise = Booking.find({ userid });
  // This will hit the DB and save the data
  return promise;
};

export default {
  saveBookingToDB: saveBookingToDB,
  getBookingsByUserId: getBookingsByUserId,
};
