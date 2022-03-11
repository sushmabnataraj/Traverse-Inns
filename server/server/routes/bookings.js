import express from "express";
import bookingsController from "./../controllers/bookings.controller";
import auth from "./../middleware/auth";

const router = express.Router();

/* Save the booking in DB */
router.post("/success", auth, bookingsController.saveBooking);

router.get("/:userid", auth, bookingsController.getBookings);

export default router;
