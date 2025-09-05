
interface Props{
    movieId: number,
}

export const nowPlayingAction = async({movieId}: Props) => {

    try {
        
        //const {data} = await movieApi.get<>(`/${movieId}/credit`)


        console.log('data')
        
        return [];

    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies'
    }

}