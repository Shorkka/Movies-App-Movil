import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideshow from '@/presentation/hooks/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/hooks/components/movies/MovieHorizontalList'

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();

    const {nowPlayingQuery, popularQuery,mejorQuery, proximasQuery } = useMovies()
    if(nowPlayingQuery.isLoading){
        return (
            <View className = 'justify-center items-center flex-1'>
                <ActivityIndicator color= 'black' size={40}/>
            </View>
            
        )
        
    }
    return (
        <ScrollView>
    <View className='mt-2 pb-10' style = {{paddingTop: safeArea.top}}>
        <Text className='text-3xl px-4 mb-2 font-bold'>Movies App</Text>

        {/* Carousel de imagenes */}
        <MainSlideshow movies = {nowPlayingQuery.data ?? []}/>

        {/* Popular */}
        <MovieHorizontalList 
        title = 'Populares' 
        movies={popularQuery.data ?? []}
        className='mb-5'
        />

        {/* Mejores calificadas */}
        
        <MovieHorizontalList 
        title = 'Mejor calificadas' 
        movies={mejorQuery.data?.pages.flat() ?? []}
        className='mb-5'
        loadNextPage={mejorQuery.fetchNextPage}
        />
        {/* Proximamente */}
        <MovieHorizontalList 
        title = 'Proximamente en cines' 
        movies={proximasQuery.data ?? []}
        className='mb-5'
        />

    </View>
    </ScrollView>
  )
}

export default HomeScreen