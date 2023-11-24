import { Link } from "react-router-dom";
import navLogo from "/images/nav-logo.png";
import "../App.css";

const Login = () => {
  return (
    <div className="background">
      <div className="flex min-h-screen justify-center items-center max-w-7xl mx-auto px-5">
        <div className="shadow-xl bg-white p-8 my-8">
          <Link to={"/"}>
            <img className="w-36 mx-auto mb-4" src={navLogo} alt="" />
          </Link>
          <p className="text-3xl font-semibold">Sign In</p>
          <p className="mt-1 font-normal">
            Nice to see you Again! Enter your details to Login.
          </p>
          <div className="mt-6 mb-2">
            <form className="space-y-6">
              <div>
                <p className="">Your Email</p>
                <input
                  size="lg"
                  name="email"
                  placeholder="name@mail.com"
                  className="p-2 rounded input input-bordered w-full"
                />
              </div>
              <div>
                <p className="">Password</p>
                <input
                  type="password"
                  size="lg"
                  name="password"
                  placeholder="********"
                  className="p-2 rounded input input-bordered w-full"
                />
              </div>
              <button
                type="submit"
                className="btn bg-blue-600 text-white hover:bg-blue-800 text-lg w-full"
              >
                Sign in
              </button>
            </form>
            <p className="mt-4 text-center font-normal">
              Do not have an account?{" "}
              <Link
                to="/register"
                className="font-medium hover:text-blue-500 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
