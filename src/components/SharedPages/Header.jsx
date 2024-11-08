import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
        <div className="text-center text-black mt-10 mb-10 space-y-5">
      <img className="mx-auto" src={logo} alt="" />
      <p className="font-poppins">Journalism Without Fear or Favour</p>
      <span className="font-poppins">{moment().format("dddd, MMMM DD, YYYY")}</span>
    </div>
    <div className="bg-gray-300 py-2 px-2 flex text-black font-poppins">
       <Link> <button className="btn btn-secondary px-8 text-white bg-[#D72050]">Latest</button></Link>
       <Marquee pauseOnHover>
      Watch Match Highlights:
        <span className="mx-4 text-red-800"><Link>Germany vs Spain...!</Link></span>
        <span className="mx-4 text-blue-800"><Link>Argentine vs Brazil...!</Link></span>
        <span className="mx-4 text-teal-800"><Link>Bercelona vs Real Madrid..!</Link></span>
       </Marquee>
    </div>
    </div>
  );
};
export default Header;
