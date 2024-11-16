const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const mongooseTorres = require('mongoose');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 


// Product
const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');

// User
const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

// Shopping Cart
const shoppingCartTypeDefs = require('./schemas/shoppingCartSchema');
const shoppingCartResolvers = require('./resolvers/shoppingCartResolver');

// Merge
const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs, shoppingCartTypeDefs]);
const resolvers = mergeResolvers([productResolvers, userResolvers, shoppingCartResolvers]);

const startServer = async () => {
    await mongoose.connect('CONNECTION-MONGO-URL');
    await mongooseTorres.connect('mongodb+srv://jacatorresre:admin@cluster0.4bnuo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
        console.log(`Servidor corriendo en ${url}`);
    });
}

startServer();
