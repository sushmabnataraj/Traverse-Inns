import express from "express";
import hotelsController from "./../controllers/hotels.controller";

const router = express.Router();

// POST a new hotel listing
router.route("/").post(hotelsController.saveNewHotel);

router.route("/").get(hotelsController.getHotels);
router.route("/hotelid/:hotelid").get(hotelsController.getHotelData);
router.route("/cityname/:cityName").get(hotelsController.getCitiesNames);
router.route("/:city").get(hotelsController.getHotelsByCityName);

export default router;
