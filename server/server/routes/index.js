import users from "./users";
import hotels from "./hotels";
import bookings from "./bookings";

/* GET home page. */

export default (app) => {
  app.use("/", users);
  app.use("/hotels", hotels);
  app.use("/booking", bookings);
};
