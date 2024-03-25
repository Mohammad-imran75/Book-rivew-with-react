import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookName, author, image, category, tags, rating } = book;
  return (
    <div className="card  bg-purple-200 p-6 shadow-xl">
      <figure>
        <img className="w-[300px] p-4 bg-gray-300" src={image} alt="Shoes" />
      </figure>
      <div className="card-actions mt-6">
          <div className="badge badge-outline">Young Adult</div>
          <div className="badge badge-outline">Identity</div>
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
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
