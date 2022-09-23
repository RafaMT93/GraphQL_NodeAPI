const resolvers = {
    Query: {
        movies: (_, __, {dataSources}) => {
            return dataSources.moviesAPI.movies();
        },
        movie: (_, {id}, {dataSources}) => {
            return dataSources.moviesAPI.movie(id);
        },
    },
    Mutation: {
        addMovie: async (_, { id, name, photo, description, casting }, { dataSources }) => {
            try {
                const movie = await dataSources.moviesAPI.addMovie(id, name, photo, description, casting);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully added a movie`,
                    movie
                }
            } catch(err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    movie: null
                }
            }
        },
        updateMovie: async (_, args, { dataSources } ) => {
            try {
                const movie = await dataSources.moviesAPI.updateMovie(args);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully added a movie`,
                    movie
                }
            } catch(err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    movie: null
                }
            }
        },
        deleteMovie: async (_, { id }, { dataSources }) => {
            try {
                const movie = await dataSources.moviesAPI.deleteMovie(id);
                return {
                    code: 204,
                    success: true,
                    message: `Movie Deleted`,
                    movie
                }
            } catch(err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    movie: null
                }
            }
        }
    },
};

module.exports = resolvers;