import { Link } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <Link to="/page-one-static">Page One (Shoes?)</Link>
            <br />
            <Link to="/page-one">Page One</Link>
            <br />
            <Link to="/page-two">Page Two</Link>
            <br />
            <Link to="/page-three">Page Three</Link>
        </div>
    );
}
