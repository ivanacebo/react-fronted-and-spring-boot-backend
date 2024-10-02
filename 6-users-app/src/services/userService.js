import axios from "axios";

const Base_URL = "http://localhost:8080/users";

export const findAll = async () => {
  try {
    const response = await axios.get(Base_URL);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const save = async ({ username, email, password }) => {
  try {
    return await axios.post(Base_URL, {
      username,
      email,
      password,
    });
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

export const update = async ({ id, username, email }) => {
  try {
    return await axios.put(`${Base_URL}/${id}`, {
      username,
      email,
    });
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

export const remove = async (id) => {
  try {
    await axios.delete(`${Base_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
