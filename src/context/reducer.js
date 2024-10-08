export const initialValue = {
  cart: [],
};

export const getTotalPrice = (cart) => {
  return cart?.reduce((acc, item) => acc + item.price, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      action.item = { ...action.item, id: Date.now() };
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let index = state.cart.findIndex((item) => item.id === action.id);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};
