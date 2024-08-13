import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "./models/Book.js";
import userRoute from "./routes/users.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Kết nối với MongoDB
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

// Routes
app.get("/all-books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/upload-books", async (req, res) => {
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = req.body;
  const newBook = new Book({
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/book/:id", async (req, res) => {
  const { id } = req.params;
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        bookTitle,
        authorName,
        imageURL,
        category,
        bookDescription,
        bookPDFURL,
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/book/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get a single book data
app.get("/book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Lấy dữ liệu của một sách cụ thể theo category
app.get("/all-books/:category", async (req, res) => {
  const { category } = req.params;
  try {
    // Tìm sách đầu tiên theo category
    const book = await Book.findOne({ category });
    if (!book) {
      return res
        .status(404)
        .json({ message: "Book not found in this category" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.use("/user", userRoute);

// Server start
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
