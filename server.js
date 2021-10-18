import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

import { read, db } from "./config/firebase.js";

// Routes
import { AccountRoute } from "./routes/account.js";
import { QuestionRoute } from "./routes/question.js";
// application
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/account", AccountRoute);
app.use("/api/question", QuestionRoute);

//  route
app.get("/", async (req, res) => {
  const citiesRef = db.collection("users");
  const snapshot = await citiesRef.get();
  const allUser = [];
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    allUser.push(doc.data())
});

res.send(allUser);
  
});

// Listening for request
app.listen(PORT, () => console.log("Server is running, show some respect"));
