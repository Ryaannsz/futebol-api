import axios, {AxiosPromise} from "axios";

import { useQuery } from "@tanstack/react-query";

const API_URL = "https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/my/leagues?api_token=HvYOdxwjxzLLVugXbHZvMYtvEdkghAHjoVx9KbAuKv2i1iDhAwkSN4s5rbtz&include=";


const fetchLeaguesData = async (): AxiosPromise<any> => {
    const response = axios.get(API_URL);
    return response;
}


export function useLeguesData(){
    const query = useQuery({
        queryFn: fetchLeaguesData,
        queryKey: ['legues-data'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data.data
    }
}