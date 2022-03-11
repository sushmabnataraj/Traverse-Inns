const URI = "http://localhost:3001";

const HOTELS = "hotels";
const USERS = "users";
const BOOKING = "booking";

// USER URLS
export const createUser = () => `${URI}/${USERS}`;
//export const updateUser=()=>`${URI}/${USERS}`
export const loginIn = () => `${URI}/${USERS}/login`;
export const updatePassword = () => `${URI}/${USERS}/me`;

// HOTELS URLS
export const searchCities = (cityName) =>
  `${URI}/${HOTELS}/cityname/${cityName}`;
export const searchHotels = (cityName) => {
  if (cityName !== "") {
    return `${URI}/${HOTELS}${cityName}`;
  } else {
    return `${URI}/${HOTELS}`;
  }
};
export const getAllHotels = () => `${URI}/${HOTELS}`;
export const getHotelDetails = (id) => `${URI}/${HOTELS}/hotelid/${id}`;

// BOOKINGS URL
export const saveBooking = () => `${URI}/${BOOKING}/success`;
export const getBookings = (id) => `${URI}/${BOOKING}/${id}`;
