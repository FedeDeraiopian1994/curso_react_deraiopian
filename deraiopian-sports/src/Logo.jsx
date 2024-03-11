import LogoSports from "./assets/logo.jpg";
import { Link } from "react-router-dom" 

const Logo = () => {
    return (
      <Link to = {"/"}>
          <img src= {LogoSports} className="img-thumbnail rounded float-start" alt=""></img>
      </Link>
    );
  }


  export default Logo;