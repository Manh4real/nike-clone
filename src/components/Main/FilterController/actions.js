import { SET_TYPE, SET_GENDER, SET_PRICE } from "./constants";

const setType = (payload) => {
  return { filter: SET_TYPE, payload };
};

const setPrice = (payload) => {
  return { filter: SET_PRICE, payload };
};

const setGender = (payload) => {
  return { filter: SET_GENDER, payload };
};

export { setType, setPrice, setGender };
