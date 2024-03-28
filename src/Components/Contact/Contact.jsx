import { MdWifiCalling1 } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="card card-side lg: max-w-5xl p-10 border-2 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://i.ibb.co/68YgZkn/kindpng-81724-1.png"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">CONTACT ME OUR PAGE!!</h2>
        <p className="flex items-center gap-3"><MdWifiCalling1></MdWifiCalling1>++9703634509238</p>
        <p className="flex items-center gap-3"><TbBrandGmail></TbBrandGmail>hablubaba@gmail.com</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
<h1>This is contact page</h1>;
