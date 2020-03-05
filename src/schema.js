const { gql } = require('apollo-server')
const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        messages: [String]!
    }
    type Query {
        users: [User]!
        me: User
    }
    type Mutation {
        login(email: String): String
    }
`

module.exports  = typeDefs