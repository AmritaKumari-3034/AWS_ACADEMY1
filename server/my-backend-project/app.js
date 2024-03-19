import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//Database Connection
connectDB(DATABASE_URL);

//JSON Connection
app.use(express.json());

//Load Routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

//lets tackle cors
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, PUT, DELETE, POST, PATCH, HEAD",
  credentials: true,
};

//cors Policy
app.use(cors(corsOptions));


app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
