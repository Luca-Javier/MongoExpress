import { config } from "dotenv"

config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test"
export const PORT = process.env.PORT || 3000
export const MONGODB_URI_ATLAS =
  process.env.MONGODB_URI_ATLAS || "mongodb://localhost/test"
