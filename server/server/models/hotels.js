import mongoose from "mongoose";
const { Schema } = mongoose;

const hotelsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    pricing: {
      type: Number,
      required: true,
    },
    numberofRoomsAvailable: {
      type: Number,
      required: true,
    },
    hotelImages: {
      type: Array,
      required: true,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    loc: {
        type: { type: String },
        coordinates: [Number],
    },
    reviews: {
      overallRating: {
        type: Number,
        required: true,
      },
      numberOfReviews: {
        type: Number,
        required: true,
      },
      locationRating: {
        type: Number,
        required: true,
      },
      cleanlinessRating: {
        type: Number,
        required: true,
      },
      serviceRating: {
        type: Number,
        required: true,
      },
    }
  },
  {
    versionKey: false,
  }
);

hotelsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

hotelsSchema.set("toJSON", { virtuals: true });

const model = mongoose.model("hotels", hotelsSchema);

export default model;
