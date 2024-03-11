import CartWidget from "./CardWidget";
import { NavLink } from "react-router-dom" 


const Navbar = () => {
    return (
        <ul className="nav nav-underline">
            <li className="nav-item ">
                <NavLink className="nav-link link-dark" aria-current="page" to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link-dark" to={"#"}>Promociones y descuentos</NavLink>
            </li>
            <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle link-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tipo de indumentaria</a>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" activeclassname = "active" to={"/category/remeras"}>Remeras</NavLink></li>
                    <li><NavLink className="dropdown-item" activeclassname = "active" to={"/category/camperas"}>Camperas</NavLink></li>
                    <li><NavLink className="dropdown-item" activeclassname = "active" to={"/category/shorts"}>Shorts</NavLink></li>
                    <li><NavLink className="dropdown-item" activeclassname = "active" to={"/category/zapatillas"}>Zapatillas</NavLink></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle link-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item bg-body link-dark" to={"#"}>Hombre</NavLink></li>
                    <li><NavLink className="dropdown-item bg-body link-dark" to={"#"}>Mujer</NavLink></li>
                    <li><NavLink className="dropdown-item bg-body link-dark" to={"#"}>Infantil</NavLink></li>
                </ul>
            </li>
            <li className="nav-item">
                <CartWidget />
            </li>
        </ul>
    );
  }


  export default Navbar;