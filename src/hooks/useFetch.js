import axios from "axios"

export const useFetch = async (url) =>{
    const {data} = await axios.get(url);

    return{
        
        data
    }
}