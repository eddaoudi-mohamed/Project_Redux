import {
  REMOVE_SELECT_PRODUCTS,
  SELECT_PRODUCTS,
  SET_PORTDUCTS,
} from "./TypeAction";

// interface Iproduct

interface IinitialValue {
  products: any[];
}
const INITIAL_STATE: IinitialValue = {
  products: [
    {
      id: 1,
      title: "products 1 ",
      category: "clothse",
    },
  ],
};

export const reducer = (
  state = INITIAL_STATE,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case SET_PORTDUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const reducerProduct = (
  state = {},
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case SELECT_PRODUCTS:
      return { ...state, ...payload };

    case REMOVE_SELECT_PRODUCTS: {
      return {};
    }
    default:
      return state;
  }
};
