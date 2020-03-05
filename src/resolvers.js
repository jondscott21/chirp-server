module.exports = {
    Query: {
        users: (_, __, { dataSources }) => dataSources.firebaseFunctions.getUsers()
    }
}