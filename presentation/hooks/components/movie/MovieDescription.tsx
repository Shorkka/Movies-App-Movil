import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infrastructure/interface/movie.interface'
import { Formatter } from '@/config/helpers/formatter'
interface Props{
    movie: CompleteMovie
}


const MovieDescription = ({movie}: Props) => {
  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text>- {movie.genres.join(", ")}</Text>
      </View>
        <Text className='font-bold mt-2 text-2xl'>Historia</Text>
        <Text className='font-normal'>{movie.description}</Text>
        <Text className='font-bold text-2xl'>Presupuesto</Text>
        <Text className='ont-bold text-xl'>{Formatter.currency(movie.budget)}</Text>
    </View>
  )
}

export default MovieDescription