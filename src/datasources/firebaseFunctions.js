const { RESTDataSource } = require('apollo-datasource-rest')

class FirebaseFunctions extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `https://us-central1-chirp-d74a6.cloudfunctions.net/`
    }
    async getUsers() {
        const response = await this.get(`users`)
        return Array.isArray(response) 
            ? response.map(user => user) 
            : []
    }
    // userReducer(id) {
    //     return {
    //         id: user.id
    //     }
    // }
    // response.map(user => this.userReducer(user)

}

module.exports = FirebaseFunctions