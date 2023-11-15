import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);

  const handleCaptchaValidation = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="hero shadow-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <LoadCanvasTemplate />
              </label>

              <input
                type="text"
                ref={captchaRef}
                name="captchaValue"
                placeholder="enter the captch above"
                className="my-2 w-full input input-bordered"
                required
              />
              <button
                onClick={handleCaptchaValidation}
                className="btn btn-outline mt-2 w-full"
              >
                Validate Captcha
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Log In"
                disabled={disable}
                className="btn bg-orange-300 text-white hover:text-orange-300"
              />
            </div>
            <label className="  text-center my-2 text-orange-300">
              New Here?{" "}
              <Link to="/authentication/register" className="font-bold">
                Create a New Account
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
