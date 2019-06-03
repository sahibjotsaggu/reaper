import news from "./news";

export default express => {
  const apiRouter = express.Router();
  apiRouter.use("/news", news);
  return apiRouter;
};
