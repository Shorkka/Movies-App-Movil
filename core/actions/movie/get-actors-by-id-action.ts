import { movieApi } from '@/core/api/movie-api'
import { Cast } from '@/infrastructure/interface/movie.cast.interface'
import { MovieDBCast } from '@/infrastructure/interface/the-movie-db/credits.response'
import { CastMapper } from '@/infrastructure/mappers/cast.mapper'

const getActorByIdAction = async(movieId: number | string): Promise<Cast> => {
    try {
        
        const {data} = await movieApi.get<MovieDBCast>(`/${movieId}/credits`)
        console.log('Pelicula - HTTP cargada')
        
        return CastMapper.fromMovieDbCastToEntity(data);

    } catch (error) {
        console.log(error);
        throw 'Cannot load actors movies'
    }
}

export default getActorByIdAction