export default {
  addToCart(context, payload) {
    const prodId = payload.id;
    const products = context.rootGetters['products/products'];
    const product = products.find((prod) => prod.id === prodId);
    //product is the payload
    context.commit('addProductToCart', product);
  },
  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
  //   removeItemFromCart(context) {},
};
