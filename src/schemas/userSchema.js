const { gql } = require('apollo-server');

const typeDefs = gql`
    type Address {
        street: String
        exterior: String
        interior: String
        neighborhood: String
        city: String
        municipality: String
        zip: String!
        state: String
        country: String
    }
    
    input AddressInput {
        street: String
        exterior: String
        interior: String
        neighborhood: String
        city: String
        municipality: String
        zip: String!
        state: String
        country: String
    }

    type User {
        _id: ID! 
        fullName: String!
        email: String!
        password: String!
        address: Address!
        registrationDate: String
        userTipe: String!
        preferredPaymentMethod: [String!]!
        facturapiid: String!
    }

    type Query {
        getAllUsers: [User]!
        userById(_id: ID!): User
    }

    type Mutation {
        createUser(
            fullName: String!
            email: String!
            password: String!
            address: AddressInput!
            userTipe: String
            preferredPaymentMethod: [String!]
        ): User!

        updateUser(
            _id: ID! 
            fullName: String
            email: String
            password: String
            address: AddressInput
            userTipe: String
            preferredPaymentMethod: [String!]
        ): User!

        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;
