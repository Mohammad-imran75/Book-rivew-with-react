import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookAppliction } from "../../utility/localStorage";
import { FaAngleDown } from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdInsertPageBreak } from "react-icons/md";

const ListedBooks = () => {
  const [appliedBooks, setAppliedBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const books = useLoaderData();
  // console.log(wishList)
  const storedBooksId = getBookAppliction();

  let storedId = [];
  useEffect(() => {
    if (books.length > 0) {
      const booksApplied = books.filter((book) =>
        storedBooksId.includes(book.bookId)
      );
      storedId.push(booksApplied);
      setAppliedBooks(storedId);
      setWishList(storedId);
    }
  }, []);
  console.log(appliedBooks);
  return (
    <div className="font-WorkSans">
      <h2 className="text-[40px] font-bold text-center bg-[#1313130D] rounded-2xl py-6">
        Books {appliedBooks.length}
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
          <div>
            {appliedBooks.length > 0 && appliedBooks[0] ? (
              appliedBooks[0].map((book) => (
                <div key={book.id}>
                  {/* card */}
                  <div className="card lg: max-w-[870px] mx-auto mb-7 mt-7 font-WorkSans p-8 card-side bg-base-100 shadow-xl border-2">
                    <figure>
                      <img
                        className="bg-[#1313130D] p-6"
                        src={book.image}
                        alt="Album"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                        {book.bookName}
                      </h2>
                      <p className="font-medium"> By : {book.author}</p>
                      <div>
                        <div className="flex items-center gap-16 mt-2">
                          <h2 className="text-2xl font-bold">Tag :</h2>
                          <div className="flex justify-around gap-7">
                            <button className="btn border-2 border-green-400 text-green-400">
                              # {book.tags[0]}
                            </button>
                            <button className="btn border-2 border-green-400 text-green-400">
                              # {book.tags[1]}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="flex items-center gap-4 font-semibold">
                            <MdAddLocationAlt className="font-2xl text-green-400"></MdAddLocationAlt>{" "}
                            Year Of Publishing : {book.yearOfPublishing}
                          </p>
                        </div>
                        <div className="p-4 flex gap-6 font-medium border-b-2">
                            <h1 className="flex items-center gap-2"><BsFillPersonLinesFill></BsFillPersonLinesFill> Publisher : {book.publisher}</h1>
                            <h1 className="flex items-center gap-2"><MdInsertPageBreak></MdInsertPageBreak> Page : {book.totalPages}</h1>
                        </div>
                        <div className="mt-4 flex items-center gap-6">
                            <h1 className="bg-[#328EFF26] border w-auto p-2 text-[#328EFF] rounded-2xl text-center">Catagorey : {book.category}</h1>
                            <h1 className="bg-[#FFAC3326] border w-auto p-2 text-[#FFAC33] rounded-2xl text-center">Rating : {book.rating}</h1>
                            <h1 className="bg-[#23BE0A] border w-auto p-2 rounded-2xl text-center text-white">View Details</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No books applied</p>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wish List"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {wishList.length > 0 && appliedBooks[0] ? (
              appliedBooks[0].map((book) => (
                <div key={book.id}>
                  {/* card */}
                  <div className="card lg: max-w-[870px] mx-auto mb-7 mt-7 font-WorkSans p-8 card-side bg-base-100 shadow-xl border-2">
                    <figure>
                      <img
                        className="bg-[#1313130D] p-6"
                        src={book.image}
                        alt="Album"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                        {book.bookName}
                      </h2>
                      <p className="font-medium"> By : {book.author}</p>
                      <div>
                        <div className="flex items-center gap-16 mt-2">
                          <h2 className="text-2xl font-bold">Tag :</h2>
                          <div className="flex justify-around gap-7">
                            <button className="btn border-2 border-green-400 text-green-400">
                              # {book.tags[0]}
                            </button>
                            <button className="btn border-2 border-green-400 text-green-400">
                              # {book.tags[1]}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="flex items-center gap-4 font-semibold">
                            <MdAddLocationAlt className="font-2xl text-green-400"></MdAddLocationAlt>{" "}
                            Year Of Publishing : {book.yearOfPublishing}
                          </p>
                        </div>
                        <div className="p-4 flex gap-6 font-medium border-b-2">
                            <h1 className="flex items-center gap-2"><BsFillPersonLinesFill></BsFillPersonLinesFill> Publisher : {book.publisher}</h1>
                            <h1 className="flex items-center gap-2"><MdInsertPageBreak></MdInsertPageBreak> Page : {book.totalPages}</h1>
                        </div>
                        <div className="mt-4 flex items-center gap-6">
                            <h1 className="bg-[#328EFF26] border w-auto p-2 text-[#328EFF] rounded-2xl text-center">Catagorey : {book.category}</h1>
                            <h1 className="bg-[#FFAC3326] border w-auto p-2 text-[#FFAC33] rounded-2xl text-center">Rating : {book.rating}</h1>
                            <h1 className="bg-[#23BE0A] border w-auto p-2 rounded-2xl text-center text-white">View Details</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No books applied</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
