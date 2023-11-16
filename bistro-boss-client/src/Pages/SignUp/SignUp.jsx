import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero shadow-2xl">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600"> Name is required</p>
              )}
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
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600"> Email is required</p>
              )}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600"> Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600"> at least 6 character</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600"> Must be in 12 characters</p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-orange-300 text-white hover:text-orange-300"
              />
            </div>
            <label className="  text-center my-2 text-orange-300">
              Already have an acoount?{" "}
              <Link to="/authentication/login" className="font-bold">
                Please Log In!
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
