import { useLocation } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication,saveWishList} from "../../utility/localStorage";



const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};
  // console.log(location)
  const handleWishList =() =>{
    saveWishList(book.bookId);
  }
  const handleToast = () =>{
    saveBookApplication(book.bookId)
    // toast('You are already added');
  }
  return (
    <div className="lg:max-w-6xl font-WorkSans mx-auto flex gap-6 rounded-xl p-6">
      <div className="w-1/2 flex justify-around items-center bg-[#1313130D] rounded-xl">
        <figure>
          <img src={book.image} alt="" />
        </figure>
      </div>
      <div className="w-1/2">
        <h2 className="text-[40px] font-bold">{book.bookName}</h2>
        <p className="mt-2"> By : {book.author}</p>
        <hr />
        <p className=" p-4">{book.category}</p>
        <hr />
        <h2 className="font-bold mt-4">
          Review : <small>{book.review}</small>
        </h2>
        <div>
          <h1 className="font-bold  p-4">
            Tag :{" "}
            <button className="mr-5 border-2 text-green-300 rounded-lg border-green-400 p-2">
              <small>{book.tags[0]}</small>
            </button>
            <button className="mr-5 border-2 text-green-300 rounded-lg border-green-400 p-2">
              <small>{book.tags[1]}</small>
            </button>
          </h1>
        </div>
        <hr />
        <div>
          <h1>
            Number of Pages :{" "}
            <small className="font-bold">{book.totalPages}</small>
          </h1>
          <h1>
            Publisher : <small className="font-bold">{book.publisher}</small>
          </h1>
          <h1>
            Year of Publishing :{" "}
            <small className="font-bold">{book.yearOfPublishing}</small>
          </h1>
          <h1>
            Rating : <small className="font-bold">{book.rating}</small>
          </h1>
          <div>
            <button onClick={handleToast} className="text-black bg-white font-bold border p-2 mr-5 rounded-lg">
              Read
            </button>
            <button onClick={handleWishList} className="text-white bg-blue-400 font-bold border p-2 rounded-lg">
              WishList
            </button>
          </div>
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
