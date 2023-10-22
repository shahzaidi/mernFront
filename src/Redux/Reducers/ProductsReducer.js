import { GET_PRODUCTS_REQUEST } from "../constant";
import { GET_PRODUCTS_SUCCESS } from "../constant";
import { GET_PRODUCTS_FAIL } from "../constant";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
