import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
    .then((res) => res.json())
    .then((data) => setBooks(data));
    console.log(books);
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-[40px] text-center font-bold mt-10">Books </h2>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
