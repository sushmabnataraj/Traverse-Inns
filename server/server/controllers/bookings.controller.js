import bookingService from "./../services/bookings.service";

const saveBooking = (req, res) => {
  const newBooking = { ...req.body };
  const promise = bookingService.saveBookingToDB(newBooking);
  promise
    .then((newBooking) => {
      res.status(200).json(newBooking);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

const getBookings = (req, res) => {
  const userid = req.params.userid;
  const promise = bookingService.getBookingsByUserId(userid);
  promise
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

export default {
  saveBooking: saveBooking,
  getBookings: getBookings,
};
