import { Link, useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Auth/CreactContext";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate  = useNavigate()

    const handleRegister = e  => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-black lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="font-poppins text-[12px]">
                <h1>
                  Already have an account?{" "}
                  <span className="hover:underline">
                    <Link to="/login">Please Login Account.</Link>{" "}
                  </span>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
