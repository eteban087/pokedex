import React, { useEffect, useState } from 'react'
import { getDataPokemon } from '../helpers/getData'
import { useParams } from 'react-router-dom'
import "../css/pokedexInfo.css"
import { Header } from '../components/Header';
import { colorType } from '../helpers/functions';

export const PokedexInfo = () => {
  const [pokemon, setPokemon] = useState(null)

  const { id } = useParams()

  const getPokemon = async () => {
    const pokemon = await getDataPokemon(id);
    setPokemon(pokemon)
  }
  useEffect(() => {
    getPokemon()

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


  const formatTypesPokemon1 = (types = []) => {
    const nameTypes = types.map(type => type.type.name);

    if (nameTypes[0]) {
      return nameTypes[0]
    }

  }

  const formatTypesPokemon2 = (types = []) => {
    const nameTypes = types.map(type => type.type.name);

    if (nameTypes[1]) {
      return nameTypes[1]
    } else {
      return "No type"
    }


  }



  const percentPogresStat = (baseStat) => {
    const MAX_STAT = 255;
    return (baseStat * 100) / MAX_STAT
  }



  const getMoves = (array=[])=>{
      return array.slice(0,25)
  }

  const getAbilitiesPokemon = (abilities = []) =>{
    const nameAbilities =  abilities.map(ability=>{
      return ability.ability.name
     
    });
    
    
     if(!nameAbilities[1]){
      nameAbilities[1] = "No ability"
     }
    
     return nameAbilities[1]

  }




  return (
    <>
      <Header />

      <main className='main'>
        <div className="container_info_pokemon">
          <div className={`color_container_info ${diccPokemonBackground[colorType(pokemon?.types)]}`}>
            <div className="container_pokemon_imagen">
              <div className="container_img_pokemon">
                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
              </div>
            </div>
          </div>
          <div className="container_pokemon_info">
            <div className={`container_id ${diccPokemonColor[colorType(pokemon?.types)]}`}>
              #{pokemon?.id}
            </div>
            <div className="container_info_p">

              <div className="grid_name_pokemon">
                <div className='container_line_left' ><div className='line_left' ></div></div>
                <div className={`name_poke ${diccPokemonColor[colorType(pokemon?.types)]} `}><h2>{pokemon?.name}</h2></div>
                <div className='container_line_rigth'> <div className='line_rigth' ></div> </div>

                <div className="container_weight_and_height">
                  <div className='weight'><p>Weight</p><h3>{pokemon?.weight}</h3></div>
                  <div className='height'><p>Height</p><h3>{pokemon?.height}</h3></div>

                </div>
              </div>

              <div className="container_types_and_skills">
                <div className="type_p"><h2>Type</h2></div>
                <div className="skills_p"><h2>Abilities</h2></div>
                <div className={`type_one ${diccPokemonBorder[colorType(pokemon?.types)]}`}>{formatTypesPokemon1(pokemon?.types)}</div>
                <div className="type_two">{formatTypesPokemon2(pokemon?.types)}</div>

                <div className="skill_one">{pokemon?.abilities[0].ability.name}</div>
                <div className="skill_two">{getAbilitiesPokemon(pokemon?.abilities)}</div>
              </div>

              <div className="container_stats">
                <div className="header_stats">
                  <div className='title_stats'><h2>Stats</h2></div>
                  <div className='line_stats'><div className="line_s"></div></div>
                  <div className='img_stats'><img src="/img/pokeStats.svg" alt="" /></div>
                </div>
              </div>

              <div className="body_stats">


                {
                  pokemon?.stats.map(stat => (
                    <div key={stat.stat.url} className="stat_container">
                      <div className="stat_info">
                        <h4>{stat.stat.name}:</h4>
                        <p>{stat.base_stat}/255</p>
                      </div>
                      <div className="stat_bar">
                        <div className="_bar" style={{ width: `${percentPogresStat(stat.base_stat)}%` }}></div>
                      </div>
                    </div>
                  ))
                }






              </div>


            </div>
          </div>
        </div>

        <div className="container_movements">
          <div className="container_stats">
            <div className="header_stats">
              <div className='title_stats'><h2>Movements</h2></div>
              <div className='line_stats'><div className="line_s"></div></div>
              <div className='img_stats'><img src="/img/pokeStats.svg" alt="" /></div>
            </div>
          </div>

          <div className="movements">
          {
            getMoves(pokemon?.moves).map(move=>(
             
              <div key={move.move.url} className="moves">
               {move.move.name}
             </div>
            ))
          }
          
          </div>
        </div>
      </main>
    </>
  )
}
