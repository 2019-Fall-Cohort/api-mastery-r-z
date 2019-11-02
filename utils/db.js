const mongoose = require("mongoose");

mongoose.connect(
  // Richard's DB
  "mongodb+srv://admin:admin@cluster007-rekop.mongodb.net/test?retryWrites=true&w=majority",

  // Zack's DB
  // "mongodb+srv://admin:passwordpassword@calico-host-khzco.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connected to the motherfuckin DB!");
});
