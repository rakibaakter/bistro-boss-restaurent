import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialSIgnIn = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const hangleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const newUser = {
          email: result.user.email,
          name: result.user.displayName,
        };
        console.log(newUser);
        axiosPublic
          .post("/users", newUser)
          .then((res) => {
            console.log(res);
            if (res.data.insertedId) {
              console.log("added to database");
            }
          })
          .catch((error) => {
            console.log(error);
          });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  return (
    <div className="text-center">
      <div className="divider">OR</div>
      <button
        onClick={hangleGoogleSignIn}
        className="my-4  btn btn-ghost w-11/12 border-orange-300"
      >
        {" "}
        Sign In With Google
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialSIgnIn;
