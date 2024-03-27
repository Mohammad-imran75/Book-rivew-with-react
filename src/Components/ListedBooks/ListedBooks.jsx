import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookAppliction } from "../../utility/localStorage";
import { FaAngleDown } from "react-icons/fa";

const ListedBooks = () => {
  const [appliedBooks, setAppliedBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const books = useLoaderData();

  const storedBooksId = getBookAppliction();

  let storedId = [];
  useEffect(() => {
    if (books.length > 0) {
      const booksApplied = books.filter((book) =>
        storedBooksId.includes(book.bookId)
      );
      storedId.push(booksApplied);
      setAppliedBooks(storedId);
    }
  }, []);
  //   console.log(appliedBooks);
  return (
    <div>
      <h2 className="text-[40px] font-bold text-center bg-[#1313130D] rounded-2xl py-6">
        Books
      </h2>

      {/* dorodown list */}
      <details className="dropdown mt-5 w-[145px] mx-auto mb-24 flex justify-center ">
        <summary className="m-1 btn bg-green-400 text-white hover:bg-green-900">
          Sort By <FaAngleDown></FaAngleDown>{" "}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 ">
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number</a>
          </li>
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Publish Year</a>
          </li>
        </ul>
      </details>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {appliedBooks.map((book) => (
            <div key={book.bookId}>
              <img src={book.image} alt="" />
            </div>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
