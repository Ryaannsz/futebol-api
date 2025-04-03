import axios, {AxiosPromise} from "axios";

import { useQuery } from "@tanstack/react-query";




const fetchPlayerFinderData = async (nomePlayer: string): AxiosPromise<any[]> => {
    const API_URL = `https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/players/search/${nomePlayer}?api_token=HvYOdxwjxzLLVugXbHZvMYtvEdkghAHjoVx9KbAuKv2i1iDhAwkSN4s5rbtz&include=`;
    const response = axios.get(API_URL);
    return response;
}



export function usePlayerFinderData(nomePlayer: string){
    const query = useQuery({
        queryFn: () => fetchPlayerFinderData(nomePlayer),
        queryKey: ['player-data'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data.data
    }
}