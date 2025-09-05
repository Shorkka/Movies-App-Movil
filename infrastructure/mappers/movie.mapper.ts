import { CompleteMovie, Movie } from "../interface/movie.interface";
import { MovieDBMovieResponse } from "../interface/moviedb-movie.resoponse";
import { Result } from "../interface/moviedb-response";



export class MovieMapper {

    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return{
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }

static fromTheMovieDBToCompliteMovie = (movie: MovieDBMovieResponse): CompleteMovie=>{
            return{
                id: movie.id,
                title: movie.title,
                description: movie.overview,
                releseDate: new Date(movie.release_date),
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                rating: movie.vote_average,
                budget: movie.budget,
                duration: movie.runtime,
                genres: movie.genres.map(g => g.name),
                originalTitle: movie.original_title,
                productionCompanies: movie.production_companies.map((c) => c.name)


        }
}
}
