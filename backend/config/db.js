// MODELS AND DATABASE CONNECTION

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionURL =
  process.env.MONGODB_URI || "mongodb://localhost:27017/epasal";

const connectDB = async () => {
  try {
    const connectionStr = await mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${connectionStr.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
