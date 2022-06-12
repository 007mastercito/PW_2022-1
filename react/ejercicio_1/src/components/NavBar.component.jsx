import logo from "../Images/react-icon-large.png"
const NavBar = () => {
    return <nav className="bg-dark h-1">
       <div className="row text-light">
        <div className="col-md fs-3 fw-bold ms-4"> <img src={logo} alt="logo" className="logo"/> <span className="titulo">ReactFacts</span></div>
        <div className="col-md-4"></div>
        <div className="col-md text-end fs-5 mt-2 me-4">React Course - Project 1</div>
       </div>
    </nav>
}

export default NavBar