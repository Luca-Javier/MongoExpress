import mongoose from "mongoose"
import { MONGODB_URI, MONGODB_URI_ATLAS } from "./config"

//
;(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log("DB is connected to", db.connection.name)
  } catch (err) {
    console.log(err)
  }
})()
