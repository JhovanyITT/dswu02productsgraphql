const { Query } = require('mongoose');
const shoppingCartService = require('../services/shoppingCartService');

const resolvers = {
    Query: {
        getAllShoppingCarts: async () => await shoppingCartService.getAllShoppingCarts(),
        getShoppingCartById: async (_, { _id }) => await shoppingCartService.getShoppingCartById(_id),
        getShoppingCartByUser: async (_, { cartId }) => await shoppingCartService.getShoppingCartByUser(cartId)
    },
    Mutation: {
        createShoppingCart: async (_, { user, product }) => await shoppingCartService.createShoppingCart({ user, product }),
        updateShoppingCart: async (_, { cartId, updates }) => await shoppingCartService.updateShoppingCart(cartId, updates), // No jala (Verificando)
        deleteShoppingCart: async (_, { _id }) => await shoppingCartService.deleteShoppingCart(_id),
        // Other mutations
        addProductShoppingCart: async (_, { cartId, product }) => shoppingCartService.addProductShoppingCart(cartId, product), // No jala (Verificando)
        removeProductFromShoppingCart: async (_, { cartId, productId }) => shoppingCartService.removeProductFromShoppingCart(cartId, productId),
        closeShoppingCart: async (_, { cartId }) => shoppingCartService.closeShoppingCart(cartId)
    },
};

module.exports = resolvers;