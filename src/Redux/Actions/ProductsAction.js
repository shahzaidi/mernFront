import Axios from "axios";
import { GET_PRODUCTS_REQUEST } from "../constant";
import { GET_PRODUCTS_SUCCESS } from "../constant";
import { GET_PRODUCTS_FAIL } from "../constant";
import { GET_PRODUCT_FAIL } from "../constant";
import { PRODUCT_DELETE_SUCCESS } from "../constant";

const GET_USERS_URL = "https://mernb-o5nz.onrender.com/";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const response = await Axios.get(GET_USERS_URL);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

export const deletetProduct = (id) => async (dispatch) => {
  const yes = window.confirm(
    `Do you want to delete student with this id:  ${id}`
  );
  console.log(yes, "yesssssssssssss");
  if (yes === true) {
    try {
      const { data } = await Axios.delete(
        `https://mernb-o5nz.onrender.com/productdelete/${id}`
      );

      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
      dispatch(getProducts());
    } catch (error) {
      dispatch({ type: GET_PRODUCT_FAIL, payload: error });
    }
  } else {
    dispatch(getProducts());
  }
};
