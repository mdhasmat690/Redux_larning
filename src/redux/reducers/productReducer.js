import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionType/actionType";

const initialState = {
  test: "TEST",
  cart: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.model === action.payload.model
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.model !== action.payload.model
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return { ...state, cart: [...newCart, selectedProduct] };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.model !== action.payload.model
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return { ...state, cart: [...newCart, selectedProduct] };
      }

      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.model !== action.payload.model
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
