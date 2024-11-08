import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/CreactContext";
import userLogo from '../../assets/user.png'

const Navbar = () => {

  const {user, logOutUser } = useContext(AuthContext)
  

  const navLinks = <>
  
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/career">Career</NavLink></li>
  
  </>
  const handleLogOut = () => {
    logOutUser()
  }
  return (
    <div className="navbar mt-10 mb-10">
      <div className="md:navbar-start">
      </div>
      <div className="md:navbar-center">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div>
        {
          user ? <span className="text-black font-bold text-[12px]">{user.email}</span> : <img src={userLogo} alt="" />
        }
        </div>
       {
        user ?  <Link><button onClick={handleLogOut} className="btn btn-neutral">Log Out</button></Link> : <Link to="/login"><button className="btn btn-neutral">Login</button></Link>
       }
      </div>
    </div>
  );
};

export default Navbar;
