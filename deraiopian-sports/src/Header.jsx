import Logo from "./Logo";
import Navbar from "./Navbar";


const Header = () =>{
    return(
        <div className="container-fluid encabezado" id="encabezado">
            <div className="row ">
                <div className="col-md-1 ">
                    <Logo />
                </div>
                <div className="col-md-8 nav justify-content-center d-flex justify-content-between">
                    <Navbar />
                </div>
                <div className="col">
                    <button className="btn btn-primary"><a className="link-dark" href="#" > Sing in</a></button>
                </div>
                <div className="col">
                    <button className="btn btn-outline-warning"><a className="link-dark" href="#">  Sing up</a></button>
                </div>
            </div>
        </div>
    )
}
export default Header;