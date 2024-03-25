import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Opppsss!!!!!!</h1>
            <Link to='/'><button className="btn btn-primary"> go back</button></Link>
        </div>
    );
};

export default ErrorPage;