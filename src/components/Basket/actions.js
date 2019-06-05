export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET';
export const addToBasket = id => ({
  type: ADD_TO_BASKET,
  payload: { id },
});

export const removeFromBasket = id => ({
  type: REMOVE_PRODUCT_FROM_BASKET,
  payload: { id },
});
