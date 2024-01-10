import { combineReducers } from "redux";
import { reducer, reducerProduct } from "./producte/Reducer";

const reducers = combineReducers({
  allProducts: reducer,
  product: reducerProduct,
});
export default reducers;
