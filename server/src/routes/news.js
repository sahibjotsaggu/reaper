require("dotenv").config();
import express from "express";
const router = express.Router();

import { _fetch as fetch } from "../utils";

const NEWS_API_URL = "https://newsapi.org/v2";

const NewsFactory = symbol =>
  fetch({
    url: `${NEWS_API_URL}/everything?q=${symbol}&apiKey=${
      process.env.NEWS_API_KEY
    }`
  });

router.get("/", async (req, res) => {
  let items = req.query.symbols.split(",").map(i => NewsFactory(i));
  const news = (await Promise.all(items)).filter(n => {
    if (n.status !== "error") {
      if (n.totalResults !== 0) {
        return n;
      }
    } else {
      console.error(n.message);
    }
  });
  return res.json({
    news
  });
});

export default router;
