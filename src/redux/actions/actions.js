import * as api from "../../api/api";
import {
  ADD_CART_PRODUCT,
  DEC,
  FILTER,
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ERROR,
  GET_CATEGORY_VALUE,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  INC,
} from "../types/types";

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({ type: GET_ALL_PRODUCTS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const getproduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(id);
    dispatch({ type: GET_PRODUCT, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_ERROR,
      payload: error,
    });
  }
};

export const getcategories = () => async (dispatch) => {
  try {
    const { data } = await api.getCategories();
    dispatch({ type: GET_ALL_CATEGORIES, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORIES_ERROR,
      payload: error,
    });
  }
};

export const addCartProduct = (product) => {
  return { type: ADD_CART_PRODUCT, payload: product };
};

export const incqwt = (id) => {
  return { type: INC, payload: id };
};

export const decqwt = (id) => {
  return { type: DEC, payload: id };
};

export const filter = (value) => {
  return { type: FILTER, payload: value };
};

export const getcategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.getCategoryProduct(category);

    dispatch({ type: GET_CATEGORY_VALUE, payload: data });
  } catch (error) {
    console.log("Error");
  }
};
