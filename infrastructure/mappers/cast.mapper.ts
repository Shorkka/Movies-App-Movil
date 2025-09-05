import { Cast } from "../interface/movie.cast.interface";
import { MovieDBCast } from "../interface/the-movie-db/credits.response";


export class CastMapper{
    static fromTheMovieDBToCompliteMovie(data: MovieDBCast): Cast | PromiseLike<Cast> {
        throw new Error('Method not implemented.');
    }
    static fromMovieDbCastToEntity(actor: MovieDBCast): Cast{
        return{
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://i.stack.imgur.com/l60Hf.png',
        }
    }

}