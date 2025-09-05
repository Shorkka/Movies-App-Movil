
import { movieApi } from '@/core/api/movie-api'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'
import { MovieDBMovieResponse } from '@/infrastructure/interface/moviedb-movie.resoponse'
import { CompleteMovie } from '@/infrastructure/interface/movie.interface'

const getMovieByIdAction = async(id: number | string): Promise<CompleteMovie> => {
    try {
        
        const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
        console.log('Pelicula - HTTP cargada')
        
        return MovieMapper.fromTheMovieDBToCompliteMovie(data);

    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies'
    }
}

export default getMovieByIdAction