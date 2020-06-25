const express = require("express");

const app = express();

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// Sets an initial port. We"ll use this later in our listener
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
