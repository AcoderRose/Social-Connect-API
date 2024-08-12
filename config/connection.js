const { connect, connection } = require("mongoose");

// Update the connection string to point to your specific database
const connectionString = "mongodb://127.0.0.1:27017/Social-Connect-API-DB";

// Connect to the MongoDB database
connect(connectionString);

// Export the connection
module.exports = connection;

// Optional: Add event listeners to handle connection events
connection.on("connected", () => {
  console.log("Mongoose connected to the database.");
});

connection.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

connection.on("disconnected", () => {
  console.log("Mongoose disconnected from the database.");
});
