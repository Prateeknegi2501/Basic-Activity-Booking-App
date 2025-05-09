// config.js
import dotenv from "dotenv";
dotenv.config();

export const JwtSecret = process.env.SECRET;
export const MongoURL = process.env.MONGO_URL;
export const Port = process.env.PORT || 8000;
