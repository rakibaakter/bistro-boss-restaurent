import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  //   console.log(authInfo);
  return authInfo;
};

export default useAuth;
