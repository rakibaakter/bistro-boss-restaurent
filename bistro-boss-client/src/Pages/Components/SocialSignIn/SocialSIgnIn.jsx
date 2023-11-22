import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth";

const SocialSIgnIn = () => {
  const { googleSignIn } = useAuth();

  const hangleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
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
