import axios from "axios";

const DOMAIN = process.env.REACT_APP_DOMAIN;

export const getAllAssets = async () => {
  const { data } = await axios.get(DOMAIN + "/api/assets");

  return data;
};

export const addAsset = async (name, description) => {
  const { data } = await axios.post(DOMAIN + "/api/assets/add", {
    name,
    description,
  });

  return data;
};
