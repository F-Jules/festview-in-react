import axios from "axios";
import jwtDecode from "jwt-decode";

const signup = userInfos => {
  return axios.post(
    `${process.env.REACT_APP_API_ENTRYPOINT}/api/users`,
    userInfos
  );
};

const authenticate = credentitials => {
  return axios
    .post(
      `${process.env.REACT_APP_API_ENTRYPOINT}/authentication_token`,
      credentitials
    )
    .then(res => res.data.token)
    .then(token => {
      window.localStorage.setItem("authToken", token);
      setAxiosHeader(token);
      return true;
    });
};

const isAuthenticated = () => {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const jwtData = jwtDecode(token);
    if (jwtData.exp * 1000 > new Date().getTime()) return true;
    return false;
  }
  return false;
};

const logout = () => {
  window.localStorage.removeItem("authToken");
  delete axios.defaults.headers["Authorization"];
};

const tokenSetUp = () => {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const jwtData = jwtDecode(token);
    if (jwtData.exp * 1000 > new Date().getTime()) {
      setAxiosHeader(token);
    } else logout();
  } else logout();
};

const setAxiosHeader = token => {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
};

export default {
  authenticate,
  logout,
  tokenSetUp,
  isAuthenticated,
  signup
};
