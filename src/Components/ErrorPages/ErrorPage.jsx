import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col bg-purple-100 min-h-screen p-4 justify-center font-WorkSans">
            <img className="w-[500px] mx-auto " src="https://i.ibb.co/tLsnGzb/221500-P1-AQJD-849.jpg" alt="" />
            <Link to='/'><button className="btn flex  mt-5  mx-auto btn-primary"> go back</button></Link>
        </div>
    );
};

export default ErrorPage;