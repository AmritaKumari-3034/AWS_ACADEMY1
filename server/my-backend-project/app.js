import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import helmet from "helmet";
//import morgan from "morgan";
//import cookieParser from "cookieParser";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//Database Connection
connectDB(DATABASE_URL);

//JSON Connection
app.use(express.json());

//app.use(morgan("dev"));
//app.use(cookieParser())



//lets tackle cors
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  credentials: true, //access-control-allow-credentials:true
};
//cors options
//app.use(helmet());
 app.use(cors(corsOptions));
 app.options("*", cors());

 app.post("/api/user", (req, res, next) => {
  
//   // res.setHeader("Access-Control-Allow-Methods", "GET");
//   // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  // Send your response data
  res.json({ message: "Data from the server" });
});

//Load Routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);


app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
