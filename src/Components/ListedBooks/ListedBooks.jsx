import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import { getBookAppliction } from "../../utility/localStorage";
import { FaAngleDown } from "react-icons/fa";

const ListedBooks = () => {
    const [appliedBooks, setAppliedBooks] = useState([]);
    console.log(appliedBooks);
    const books = useLoaderData();
    const storedBooksId = getBookAppliction();
    console.log(storedBooksId)
  
    useEffect(() => {
      if (books.length > 0) {
        const booksApplied = books.filter(book => storedBooksId.includes(book.bookId));
        setAppliedBooks(booksApplied);
      }
    }, [books, storedBooksId]);
//   console.log(appliedBooks);
  return (
    <div>
      <h2 className="text-[40px] font-bold text-center bg-[#1313130D] rounded-2xl py-6">
        Books
      </h2>
     

      {/* dorodown list */}
      <details className="dropdown mt-5 w-[145px] mx-auto mb-24 flex justify-center ">
        <summary className="m-1 btn bg-green-400 text-white hover:bg-green-900" >Sort By <FaAngleDown></FaAngleDown> </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 ">
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number</a>
          </li>
          <li><a>Pages</a></li>
          <li><a>Publish Year</a></li>
        </ul>
      </details>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {book && (
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={book.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="WishList Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          WishList Books
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
