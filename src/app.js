import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Database connection successfully made");
});

const app = express();

app.use(express.json());

routes(app);

export default app;
