import Hotel from "../models/hotels";

const saveHoteltoDB = (newHotelData) => {
  const hotel = new Hotel(newHotelData);
  const promise = hotel.save();
  // This will hit the DB and save the data
  return promise;
  // then and catch will be in this promise object
};

const getHotelsByCityFromDB = (req) => {
  const cityName = req.params.city;
  const query = req.query;
  let filter;
  if(Object.keys(query).length !== 0){
    filter = { city: {$regex : `${cityName}`, '$options' : 'i'}, pricing: { $gte: query.pricemin ? query.pricemin: '0', $lte: query.pricemax ? query.pricemax: '10000'} };
  } else{
    filter = { city: {$regex : `${cityName}`, '$options' : 'i'}}
  }

  const promise = Hotel.find(filter);
  return promise;
};

const getHotelDetailFromDB = (hotelid) => {
  const promise=Hotel.findById(hotelid).exec();
  return promise;
};

const getCityNamesFromDB = (cityName) => {
  const regex = new RegExp(cityName, "i");
  const promise = Hotel.find({ city: { $regex: regex } });
  return promise;
};

const search=(params)=>{
  let query;
  if(params.pricemin || params.pricemax) {
    query = { pricing: { $gte: params.pricemin ? params.pricemin: '1' , $lte: params.pricemax ? params.pricemax: '10000' } };
   } 
  const promise = Hotel.find(query).exec();
   return promise;
}

export default {
  saveHoteltoDB: saveHoteltoDB,
  getHotelsByCityFromDB: getHotelsByCityFromDB,
  getCityNamesFromDB: getCityNamesFromDB,
  getHotelDetailFromDB:getHotelDetailFromDB,
  search:search
};
