import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "practicecs1";

const simpleboardSchema = new Schema(
  {
    title: String,
    writer: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, simpleboardSchema, "practicecs1s");
