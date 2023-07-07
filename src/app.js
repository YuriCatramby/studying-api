import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, Title: "The Housemaid" },
  { id: 2, Title: "Think Again" },
];

app.get("/", (req, res) => {
  res.status(200).send("Node Course");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Successfully registered book");
});

app.put("/books/:id", (req, res) => {});

function searchBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;
