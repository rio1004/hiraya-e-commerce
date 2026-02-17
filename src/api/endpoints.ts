export const API_ENDPOINTS = {
  PRODUCTS: {
    GET: "/products",
  },
  AUTH: {
    FIREBASE_VERIFY: "/auth/firebase",
  },
  CART: {
    GET_QTY: "/cart/qty",
    ADD_TO_CART: "/cart/add-to-cart",
    GET_CART_ITEMS: "/cart",
    UPDATE_CART_ITEMS: "/cart/update-cart",
    DELETE_CART_ITEM: (id: string) => `/cart/items/${id}`,
  },
};
