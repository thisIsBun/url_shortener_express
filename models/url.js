import mongoose from "mongoose";

const Schema = mongoose.Schema

const urlSchema = new Schema({
  shortURL: {
    type: String,
    require: true
  },
  originURL: {
    type: String,
    require: true
  }
})

export default mongoose.model('URL', urlSchema)