export const productsId = state => state.products;
export const getAllProducts = state => productsId(state).map(id => state.entities[id]);

export const basketIds = state => state.basket.ids;
export const basketAmount = (state, id) => state.basket.amounts[id];
export const getProductsInBasket = state => [
  ...basketIds(state).map(id => ({ ...state.entities[id], amount: basketAmount(state, id) })),
];
