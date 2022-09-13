import axios from "axios";

const url = "api/users/";

const register = async (userData) => {
  console.log(userData);

  try {
    const res = await axios.post(url, userData);

    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }

    return res.data;
  } catch (error) {
    throw new Error("Error");
  }
};

const userLogin = async (credentials) => {
  const res = await axios.post(`${url}login`, credentials);

  return res.data;
};
const getUserDetails = async (email) => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { email },
  };
  const res = await axios.get(url + "getUserDetails", config);

  return res.data;
};

const getLeaderboards = async () => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.get(`${url}getLeaderboards`, config);
  return res.data;
};

export const userService = {
  register,
  userLogin,
  getUserDetails,
  getLeaderboards,
};

export default userService;
