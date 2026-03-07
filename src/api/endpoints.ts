const location_prefix = "/locations";
const address_pfx = "/addresses";
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
    GET_CART_ITEMS: (ids?: string) => `/cart?ids=${ids}`,
    UPDATE_CART_ITEMS: "/cart/update-cart",
    DELETE_CART_ITEM: (id: string) => `/cart/items/${id}`,
  },
  ORDER: {
    GET_ORDERS: "/orders",
  },
  LOCATION: {
    GET_REGIONS: `${location_prefix}/regions`,
    GET_PROVINCE: (code: string) => `${location_prefix}/provinces/${code}`,
    GET_CITIES_BY_PROVINCE: (code: string) =>
      `${location_prefix}/cities/province/${code}`,
    GET_CITIES_BY_REGION: (code: string) =>
      `${location_prefix}/cities/region/${code}`,
    GET_BRGY: (code: string) => `${location_prefix}/barangays/${code}`,
  },
  ADDRESSS: {
    CREATE_ADDRESS: `${address_pfx}`,
  },
};
