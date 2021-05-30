import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getUser = async (username) => {
  try {
    const response = await axios.get(`${baseUrl}users/${username}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { getUser };
