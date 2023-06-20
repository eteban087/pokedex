import { useEffect, useState } from "react"
import "../css/pokemonCard.css"
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import { colorType } from "../helpers/functions"

export const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null)

  const getPokemon = async () => {
    const { data: pokemon } = await useFetch(pokemonUrl.url);
    setPokemon(pokemon)
  }

  const navigate = useNavigate()

  useEffect(() => {

    getPokemon();



  }, [])

  const diccPokemonBackground = {
    normal: "normal",
    fighting: "fighting",
    flying: "flying",
    poison: "poison",
    ground: "ground",
    rock: "rock",
    bug: "bug",
    ghost: "ghost",
    steel: "steel",
    fire: "fire",
    water: "water",
    grass: "grass",
    electric: "electric",
    psychic: "psychic",
    ice: "ice",
    dragon: "dragon",
    dark: "dark",
    fairy: "fairy",
    unknown: "unknown",
    shadow: "shadow"

  }

  
  const diccPokemonBorder = {
    normal: "bnormal",
    fighting: "bfighting",
    flying: "bflying",
    poison: "bpoison",
    ground: "bground",
    rock: "brock",
    bug: "bbug",
    ghost: "bghost",
    steel: "bsteel",
    fire: "bfire",
    water: "bwater",
    grass: "bgrass",
    electric: "belectric",
    psychic: "bpsychic",
    ice: "bice",
    dragon: "bdragon",
    dark: "bdark",
    fairy: "bfairy",
    unknown: "bunknown",
    shadow: "bshadow"

  }

  const diccPokemonColor = {
    normal: "cnormal",
    fighting: "cfighting",
    flying: "cflying",
    poison: "cpoison",
    ground: "cground",
    rock: "crock",
    bug: "cbug",
    ghost: "cghost",
    steel: "csteel",
    fire: "cfire",
    water: "cwater",
    grass: "cgrass",
    electric: "celectric",
    psychic: "cpsychic",
    ice: "cice",
    dragon: "cdragon",
    dark: "cdark",
    fairy: "cfairy",
    unknown: "cunknown",
    shadow: "cshadow"

  }

  const formatTypesPokemon = (types = [])=>{
    const nameTypes =  types.map(type=>type.type.name);
    const type = nameTypes.join(" / ")
    return type;
    
  }



  const toPokemonInfo=()=>{
    navigate(`/pokedex/${pokemon?.id}`)
  }

  

 
  

  return (
    <>

      <div onClick={toPokemonInfo} className={`card ${diccPokemonBorder[colorType(pokemon?.types)]}`}>

        <div className={`color_card ${diccPokemonBackground[colorType(pokemon?.types)]}`}>
          <div className="container_pokemon">
            <div className="container_img">
              <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </div>
          </div>
        </div>

        <div className="info_card">

          <div className={`body_card ${diccPokemonColor[colorType(pokemon?.types)]}`}>
            <h2>{pokemon?.name}</h2>
            <h4> { formatTypesPokemon(pokemon?.types)}</h4>
            <p>Type</p>
          </div>

          <div className={`footer_card ${diccPokemonColor[colorType(pokemon?.types)]}`}>
            <div className="hp"><p>HP</p><h4>{pokemon?.stats[0].base_stat}</h4></div>
            <div className="attack"><p>ATTACK</p><h4>{pokemon?.stats[1].base_stat}</h4></div>
            <div className="defense"><p>DEFENSE</p><h4>{pokemon?.stats[2].base_stat}</h4></div>
            <div className="speed"><p>SPEED</p><h4>{pokemon?.stats[5].base_stat}</h4></div>
          </div>


        </div>

      </div>



    </>

  )
}
