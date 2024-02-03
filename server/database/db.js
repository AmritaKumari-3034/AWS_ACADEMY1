const mongoose = require("mongoose");

const connection = (url, PORT, app) => {
  mongoose
      .connect(url, {
              dbName: "Piyush_Academy_UserDetails",
              useNewUrlParser: true,
              useUnifiedTopology: true,
        })
    .then(() => {
      console.log("Database connected successfully ");
      app.listen(PORT, () => {
        console.log("Server listening on http:localhost:" + PORT);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connection;
