import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://yuricatramby:123@cluster0.jij4bw4.mongodb.net/books-course-base"
);

let db = mongoose.connection;

export default db;
