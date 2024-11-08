const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 


// Product
const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');

// User
const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

// Merge
const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs]);
const resolvers = mergeResolvers([productResolvers, userResolvers]);

const startServer = async () => {
    await mongoose.connect('mongodb+srv://jhgajaimefe:ENKaxGskmZePM2M@jhovanycluster.r32tu.mongodb.net/?retryWrites=true&w=majority&appName=JhovanyCluster');
    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
        console.log(`Servidor corriendo en ${url}`);
    });
}

startServer();