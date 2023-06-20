import axios from "axios";

export const getAllPokemons = async () =>{
    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1281");
    const {results} = data;
    return results;
    
}


export const getDataPokemon = async (id)=>{
 const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
 return data
}

