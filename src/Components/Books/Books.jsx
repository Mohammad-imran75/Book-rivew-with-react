
import Book from "../Book/Book";
import { useLoaderData } from "react-router-dom";

const Books = () => {
const books = useLoaderData();
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
