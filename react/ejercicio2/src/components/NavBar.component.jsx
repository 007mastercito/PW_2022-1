import mundo from "../images/globe-icon-white-8.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const NavBar = () => {
    return <nav className="navbar">
        <div className="row">
            <div className="col fw-bold ms-5"> 
            <img className="mundo" src={mundo} alt="..." /> 
            <span className="ms-2">My travel journal</span></div>
        </div>
    </nav>
}
export default NavBar