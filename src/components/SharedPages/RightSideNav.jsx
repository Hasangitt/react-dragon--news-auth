import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import swimmingPhoto from '../../assets/swimming.png'
import classPhoto from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import ads from '../../assets/bg.png'

const RightSideNav = () => {
  return (
    <div>
      <div className=" mb-10">
        <h1 className="text-xl font-semibold text-black mb-5">Login With</h1>
        <Link>
          <button className="btn mb-5 text-black hover:text-white bg-transparent w-full">
           <FaGoogle></FaGoogle>
            Google
          </button>
        </Link>
        <Link>
          <button className="btn text-black hover:text-white bg-transparent w-full">
           <FaGithub></FaGithub>
           GitHub
          </button>
        </Link>
      </div>
      <div className=" p-2 mb-10">
        <h1 className="text-xl font-semibold text-black mb-5">Find Us On</h1>
        <div className="flex items-center gap-2 p-3 border"><FaFacebook className="text-black" /><a className="text-black" href="https://www.facebook.com/">Facebook</a></div>
        <div className="flex items-center gap-2 p-3 border"><FaTwitter className="text-black" /><a className="text-black" href="https://www.twitter.com/">Twitter</a></div>
        <div className="flex items-center gap-2 p-3 border"><FaInstagram className="text-black" /><a className="text-black" href="https://www.instagram.com/">Instagram</a></div>
      </div>
      <div className="p-2 bg-gray-200 space-y-10 rounded-lg">
        <h1 className="text-xl font-semibold text-black mb-5">Q-Zone</h1>
        <img className="mx-auto" src={swimmingPhoto} alt="" />
        <img className="mx-auto" src={classPhoto} alt="" />
        <img className="mx-auto" src={playGround} alt="" />
        <img className="mx-auto" src={ads} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
