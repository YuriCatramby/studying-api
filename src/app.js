import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "The Housemaid" },
  { id: 2, title: "Think Again" },
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
