const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const FirebaseFunctions = require('./datasources/firebaseFunctions')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        firebaseFunctions: new FirebaseFunctions()
    })
 })
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})
.catch(err => console.log(err))