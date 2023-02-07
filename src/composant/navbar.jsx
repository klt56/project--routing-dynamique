import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="Navbar">
        <Link to="/">home</Link>
        <br />
        <Link to="/about">about</Link>
        <br />
        <Link to="/work">work</Link>
        </div>

    );
}

export default Navbar;
