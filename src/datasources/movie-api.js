const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'http://localhost:8080/'
    }
    movies(){
        return this.get(`movies`)
    };
    movie(id){
        return this.get(`movies/${id}`)
    };
    addMovie({ id, name, photo, description, casting }){
        return this.post(`movies`, { id, name, photo, description, casting });
    };
    updateMovie({ id, name, photo, description, casting }){
        return this.put(`movies/${id}`, { id, name, photo, description, casting });
    };
    deleteMovie(id){
        return this.delete(`movies/${id}`);
    };
}

module.exports = MoviesAPI;