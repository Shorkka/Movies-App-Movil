import { movieApi } from '@/core/api/movie-api'
import { CreditResopnse } from '@/infrastructure/interface/moviedb.credit-response'
import { CastMapper } from '@/infrastructure/mappers/cast.mapper'

const getActorByIdAction = async(movieId: number | string) => {
    try {
        
        const {data} = await movieApi.get<CreditResopnse>(`/${movieId}/credits`)
        console.log('Pelicula - HTTP cargada')
        
        return data.cast.map(CastMapper.fromMovieDBCastToEntity)

    } catch (error) {
        console.log(error);
        throw 'Cannot load actors movies'
    }
}

export default getActorByIdAction