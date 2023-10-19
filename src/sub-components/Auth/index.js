import { Navigate } from "react-router-dom";
import { isJwtValid } from "./auth";

const Auth = ({ children, allow, redirectTo }) => {
  const authToken = localStorage.getItem("authToken");
  let loading = false;

  if (loading) {
    return <></>;
  } else {
    if (allow === "$unauthenticated") {
      if (!isJwtValid(authToken)) return children;
      else {
        return <Navigate to={"/"} />;
      }
    } else if (allow === "$authenticated" && isJwtValid(authToken)) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  }
};

export default Auth;
