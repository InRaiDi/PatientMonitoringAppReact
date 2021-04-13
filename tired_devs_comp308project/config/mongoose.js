// Load the module dependencies:
//  config.js module and mongoose module
var config = require("./config"),
  mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose
    .connect(config.db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log("Error");
    });

  // Load the 'User' model
  require("../app/models/user.server.model");
  // Load the 'DailyInformation' model
  require("../app/models/dailyReport.server.model");
  //Load the 'EmergencyAlert' model
  require("../app/models/emergencyAlert.server.model");
  //Load the 'DailyTip' model
  require("../app/models/dailyTip.server.model");
  // Return the Mongoose connection instance
  return db;
};
