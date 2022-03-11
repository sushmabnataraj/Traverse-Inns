import hotelsService from "./../services/hotels.service";
import { uniqBy } from "lodash";

// Create new hotel
const saveNewHotel = (req, res) => {
  const newHotel = { ...req.body };

  const promise = hotelsService.saveHoteltoDB(newHotel);
  promise
    .then((newHotel) => {
      res.status(200).json(newHotel);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

const getHotelsByCityName = (req, res) => {
  const cityName = req.params.city;
  const promise = hotelsService.getHotelsByCityFromDB(req);
  promise
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};

const getCitiesNames = (req, res) => {
  // const cityName = req.params.cityName;
  const promise = hotelsService.getCityNamesFromDB(req);
  promise
    .then((data) => {
      let uniqueCitiesData = uniqBy(data, "city");
      let uniqueCities = uniqueCitiesData.map((d) => d.city);
      res.status(200).json(uniqueCities);
    })
    .catch((err) => {
      console.log("Error" + err);
      res.status(400).json(err.errors);
    });
};
//
const getHotelData = (request, response) => {
  const hotelid = request.params.hotelid;
  console.log(hotelid);
  const promise = hotelsService.getHotelDetailFromDB(hotelid);
  promise
    .then((hotel) => {
      response.status(200);
      response.json(hotel);
    })
    .catch(e=>{
      response.status(400);
      response.json(e.message);
  })
};


//defined a method to get all hotels  from database. This will call service where business logic is written.
const getHotels=(request,response)=>{
const query = request.query;
const promise=hotelsService.search(query);
promise.then((hotels)=>
{
    response.status(200);
    response.json(hotels);
}).catch(e=>{
    response.status(400);
    response.json(e.message);
})
}


export default {
  saveNewHotel: saveNewHotel,
  getHotelsByCityName: getHotelsByCityName,
  getCitiesNames: getCitiesNames,
  getHotels:getHotels,
  getHotelData:getHotelData
};
