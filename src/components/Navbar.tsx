import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/sg-elections/">Home</Link>
            <Link to="/sg-elections/data">Data</Link>
            <Link to="/sg-elections/references">References</Link>
        </nav>
    )
}

export default NavBar