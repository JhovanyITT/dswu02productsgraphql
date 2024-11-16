const { Query } = require('mongoose');
const userService = require('../services/userService');

const resolvers = {
    Query: {
        getAllUsers: async () => await userService.getAllUsers(),
        userById: async () => await userService.getUserById(_id),
    },
    Mutation: {
        createUser: async (_, args) => await userService.createUser(args),
        updateUser: async (_, args) => await userService.updateUser(args),
        deleteUser: async (_, { _id }) => await userService.deleteUser(_id),
    },
  };

module.exports = resolvers;