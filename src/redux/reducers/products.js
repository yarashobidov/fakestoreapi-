import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  GET_ALL_PRODUCTS_ERROR,
  GET_PRODUCT_ERROR,
  ADD_CART_PRODUCT,
  INC,
  DEC,
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  GET_CATEGORY_VALUE,
  FILTER,
} from "../types/types";

const initialState = {
  products: [],
  cart: [],
  filterProducts: [],
  categories: [],
  product: null,
};

const elemet = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload, filterProducts: [] };
    case GET_ALL_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    case GET_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case FILTER: {
      const value = action.payload.toLowerCase();
      const result = state.products.filter(
        (x) =>
          x.title.toLowerCase().includes(value) ||
          x.description.toLowerCase().includes(value)
      );
      return { ...state, filterProducts: result };
    }
    case ADD_CART_PRODUCT: {
      const pr = state.cart.find((x) => x.id === action.payload.id);

      if (pr) {
        return {
          ...state,

          cart: state.cart.map((x) =>
            x.id === action.payload.id ? { ...x, qwt: x.qwt + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qwt: 1 }],
        };
      }
    }
    case INC:
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.payload ? { ...x, qwt: x.qwt + 1 } : x
        ),
      };

    case DEC: {
      const result = state.cart.find((x) => x.id === action.payload);
      if (result.qwt === 1) {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== action.payload),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === action.payload ? { ...x, qwt: x.qwt - 1 } : x
          ),
        };
      }
    }

    case GET_ALL_CATEGORIES:
      return { ...state, categories: action.payload };
    case GET_ALL_CATEGORIES_ERROR:
      return { ...state, error: action.payload };

    case GET_CATEGORY_VALUE:
      return { ...state, products: action.payload, filterProducts: [] };

    default:
      return state;
  }
};

export default elemet;
