import { Cast } from '@/infrastructure/interface/movie.cast.interface';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActorCard } from './ActorCast';

interface Props {
  cast: Cast[];
}

export const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-52">
        <Text className='font-bold text-2xl px-5'>Actores</Text>
        <FlatList
        data={cast} 
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ActorCard actor = {item}/>}        
        />
    </View>
  );
};