import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingsSchema = new mongoose.Schema(
  {
    bookingDetails: {
      type: Object,
      required: true,
      trim: true,
    },
    paypalData: {
      type: Object,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

bookingsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

bookingsSchema.set("toJSON", { virtuals: true });

const model = mongoose.model("bookings", bookingsSchema);

export default model;
