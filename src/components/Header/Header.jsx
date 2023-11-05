import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h1>Welcome to Our Webside</h1>
           <nav  className="container">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/Contract">Contract us</Link>
            <Link to="/users">users</Link>
           
          
           </nav>
        </div>
    );
};

export default Header;