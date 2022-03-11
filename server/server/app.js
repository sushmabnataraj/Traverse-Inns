import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
const cors = require("cors");

// mongoose connection
// mongoose connection
mongoose.connect(
  //"mongodb+srv://test:test@cluster0.nxrzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  "mongodb+srv://admin:" +
    process.env.MONGO_PASSWORD +
    "@cluster0.dbaj9.mongodb.net/webproject?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

routes(app);

export default app;
