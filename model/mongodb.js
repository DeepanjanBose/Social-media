const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false  },
  (err) => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log(
        "Failed to Establish Connection with MongoDB with Error: " + err
      );
    }
  }
);
