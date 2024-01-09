import {
  REMOVE_SELECT_PRODUCTS,
  SELECT_PRODUCTS,
  SET_PORTDUCTS,
} from "./TypeAction";

const setProducts = () => {
  return {
    type: SET_PORTDUCTS,
  };
};

const selectProducts = () => {
  return {
    type: SELECT_PRODUCTS,
  };
};

const removeSelectProduct = () => {
  return {
    type: REMOVE_SELECT_PRODUCTS,
  };
};
