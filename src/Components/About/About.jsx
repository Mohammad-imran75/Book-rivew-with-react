const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/CVp9FNS/cafe-frankfurt-germany.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there This is Book Shop</h1>
          <p className="mb-5">
          Perusing the shelves of the quaint bookshop, I found myself lost in a world of endless possibilities, each book whispering tales waiting to be discovered.
          </p>
          <button className="btn btn-primary">Let's go</button>
        </div>
      </div>
    </div>
  );
};

export default About;
