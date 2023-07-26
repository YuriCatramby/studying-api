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

// const books = [
//   { id: 1, title: "The Housemaid" },
//   { id: 2, title: "Think Again" },
// ];

// routes(app);

// app.get("/", (req, res) => {
//   res.status(200).send("Node Course");
// });

// app.get("/books", (req, res) => {
//   books.find((err, books) => {
//     res.status(200).json(books);
//   });
// });

// app.post("/books", (req, res) => {
//   books.push(req.body);
//   res.status(201).send("Successfully registered book");
// });

function searchBook(id) {
  return books.findIndex((book) => book.id == id);
}

app.put("/books/:id", (req, res) => {
  let index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  let index = searchBook(req.params.id);
  res.json(books[index]);
});

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  res.send(`Book ${id} removed successfully`);
});

export default app;
