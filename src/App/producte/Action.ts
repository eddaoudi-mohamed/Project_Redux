import {
  REMOVE_SELECT_PRODUCTS,
  SELECT_PRODUCTS,
  SET_PORTDUCTS,
} from "./TypeAction";

export const setProducts = (products: any) => {
  return {
    type: SET_PORTDUCTS,
    payload: products,
  };
};

export const selectProduct = (product: any) => {
  return {
    type: SELECT_PRODUCTS,
    payload: product,
  };
};

export const removeSelectProduct = () => {
  return {
    type: REMOVE_SELECT_PRODUCTS,
  };
};
