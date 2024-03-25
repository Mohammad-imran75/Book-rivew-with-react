const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 gap-6 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/GJd3RCR/books-imagination-still-life.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-[56px] font-bold">Books to freshen <br />up your bookshelf</h1>
          <button className="btn mt-10 bg-[#23BE0A] text-white font-bold">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
