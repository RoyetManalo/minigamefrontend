import axios from "axios";

const url = "api/quests/";

const getAllQuests = async () => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.get(url, config);
  return res.data;
};

const attackMonster = async (attackDetails) => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await axios.post(`${url}attackMonster`, attackDetails, config);

  return res.data;
};

export const questService = {
  getAllQuests,
  attackMonster,
};

export default questService;
