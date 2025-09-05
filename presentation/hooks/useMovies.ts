import { mejorCalificacionMoviesAction } from "@/core/actions/movies/calificaciones.action";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { proximasMoviesAction } from "@/core/actions/movies/proximas.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"



export const useMovies = () => {
    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn:  nowPlayingAction, 
        staleTime: 1000* 60*60*24,
    });

    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popularPlaying'], 
        queryFn:  popularMoviesAction, 
        staleTime: 1000* 60*60*24,
    });
    const mejorQuery = useInfiniteQuery({ 
        initialPageParam: 1,
        queryKey: ['movies', 'mejorPlaying'], 
        queryFn: ({pageParam}) => {
            return mejorCalificacionMoviesAction({page: pageParam})
        }, 
        getNextPageParam: (pages, lastPage) => pages.length+1,
        staleTime: 1000* 60*60*24,
    });
    const proximasQuery = useQuery({ 
        queryKey: ['movies', 'proximasPlaying'], 
        queryFn:  proximasMoviesAction, 
        staleTime: 1000* 60*60*24,
    });
    
    return{
        nowPlayingQuery,
        popularQuery,
        mejorQuery,
        proximasQuery

    }
}