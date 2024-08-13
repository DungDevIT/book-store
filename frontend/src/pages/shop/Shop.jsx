import { useState, useEffect } from "react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-16 mb-16 px-4 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        All Books
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-800 mb-2">
                {book.bookTitle}
              </h5>
              <p className="text-gray-600 mb-4">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
