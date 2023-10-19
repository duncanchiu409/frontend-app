import jwt_decode, { JwtPayload } from "jwt-decode";
export const isJwtValid = (token) => {
  if (token) {
    const decodedToken = jwt_decode(token);

    if (decodedToken?.exp < (new Date().getTime() + 1) / 1000) {
      return false;
    }
    return true;
  }
  return false;
};
