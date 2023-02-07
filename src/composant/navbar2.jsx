import {Link} from "react-router-dom";
import Navbar from "./navbar";
const Navbar2 = () => {
    return (
        <div className="Navbar2">
        <Navbar/>
        <Link to="/work/platon">platon</Link>
        --
        <Link to="/work/solane">solane</Link>
        --
        <Link to="/work/sedal">sedal</Link>
</div>
      );
}
export default Navbar2;
