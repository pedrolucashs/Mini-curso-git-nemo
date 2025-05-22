import "./Header.css";
import {useNavigate } from "react-router-dom";
import Logo_NEMO from "../assets/logo_nemo.svg";
function Nav() {
  const navigate = useNavigate();




  return (

      <nav className="HeaderContainer">
      <img src={Logo_NEMO} alt="Logo NEMO" onClick={() => navigate("/")} />
     
     
    </nav> 
  );
}

export default Nav;