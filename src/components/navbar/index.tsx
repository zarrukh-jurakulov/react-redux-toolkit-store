import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <div>
          <button className="btn btn-lg">
            <IoMdNotificationsOutline />
          </button>
          <button className="btn btn-lg" onClick={() => navigate("/cart")}>
            <AiOutlineShoppingCart />
          </button>
          <button className="btn btn-lg">
            <BiUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
