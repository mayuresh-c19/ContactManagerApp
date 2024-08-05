require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionString = process.env.CONNECTION_STRING;
    const connect = await mongoose.connect(connectionString);
    console.log(
      "Database Connected Successfully : ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;