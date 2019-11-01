const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster007-rekop.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connected to the motherfuckin DB!");
});
