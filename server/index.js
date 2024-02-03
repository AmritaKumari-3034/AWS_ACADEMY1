//package  imports
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connection = require("./database/db");
// const notfoundmiddleware = require("./middleware/notFoundMiddleware");

//configurations
dotenv.config();
app.use(morgan("dev"));

app.use(cookieParser());

//middleware
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Change this to your frontend's actual URL
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials (e.g., cookies) to be included in the request
  next();
});

// route imports
const registerroutes = require("./routes/registeruser/registerroutes");
const hireuserroutes = require("./routes/hireuser/hireuserroutes");
const usercourses = require("./routes/courses/usercourses");

// app.get("/", (req, res) => {
//   console.log("Welcome");
//   return res.send("hello friend");
// });
/** HTTP GET Request */
app.get("/getData", (req, res) => {
  res.cookie("jwt_token", "Hello Amrita", {
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
    httpOnly: true,
  });
  res.send("welocme to Piyush Academy");
});

//for serach bar
app.get("/search", async (req, res) => {
  const searchTerm = req.query.q;

  try {
    // Use a regular expression for a case-insensitive search
    const results = await Product.find({
      name: { $regex: new RegExp(searchTerm, "i") },
    });

    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.listen(3000, () => console.log("listening"));

//api routes
app.use("/api/user", registerroutes); //api routes for user routes
app.use("/api/usercourse", usercourses); //api routes for courses routes

app.use("/api/userhire", hireuserroutes); //api routes for  Hire User routes

const notfoundmiddleware = (req, res, next) => {
  res.status(404).json({
    sucess: false,
    msg: "Route Doesnt Exist",
  });
};

app.use(notfoundmiddleware);

//connection to database
const PORT = process.env.PORT;
const url = process.env.MONGO_URL;
/** start server only when we have a valid connection */
connection(url, 5000, app);
