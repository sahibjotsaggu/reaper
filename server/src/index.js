require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  next();
});

mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost/reaper", {
  useNewUrlParser: true
});

const apiRoutes = routes(express);

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${process.env.PORT || 8080}`);
});
