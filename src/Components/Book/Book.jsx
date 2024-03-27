import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, category, tags, rating ,bookId} = book;
  // console.log(book);
  return (

    <Link to={`/book/${bookId}`} state={{book}}>
      <div className="card  bg-purple-200 p-6 shadow-xl mt-6">
        <figure>
          <img className=" p-4 bg-gray-300" src={image} alt="Shoes" />
        </figure>
        <div className="card-actions mt-6">
          <div className="badge text-green-400 bg-gray-200">{tags[0]}</div>
          <div className="badge text-green-400 bg-gray-200">{tags[1]}</div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <h1>{category}</h1>
          <h1>{rating}</h1>
        </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
