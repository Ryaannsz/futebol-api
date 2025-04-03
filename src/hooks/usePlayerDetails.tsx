import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";


  const fetchPlayerDetails = async (id: string | undefined): AxiosPromise<any> => {
    const API_URL = `https://cors-anywhere.herokuapp.com/https://api.sportmonks.com/v3/football/players/${id}?api_token=HvYOdxwjxzLLVugXbHZvMYtvEdkghAHjoVx9KbAuKv2i1iDhAwkSN4s5rbtz&include=`;
    const response = axios.get(API_URL);
    return response;
}

  export function usePlayerDetailsData(id: string | undefined){
    const query = useQuery({
        queryFn: () => fetchPlayerDetails(id),
        queryKey: ['playerdetails-data'],
        retry: 2
    })
    
    return {
        ...query,
        data: query.data?.data
    }
}