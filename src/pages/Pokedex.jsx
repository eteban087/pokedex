import { PokemonCard } from '../components/PokemonCard';
import '../css/pokedex.css'
import { useSelector } from 'react-redux';
import { getAllPokemons } from '../helpers/getData';
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Header } from '../components/Header';
import { pagination } from '../helpers/functions';
export const Pokedex = () => {
  const nameTraine = useSelector(state => state.nameTraine);
  const [pokemones, setPokemones] = useState([]);
  const [namePokemon, setNamePokemon] = useState("")
  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState("")
  const [currentPage, setcurrentPage] = useState(1)


  // FUNCION QUE EJECUTA LA PETICION PARA TRAER TODOS LOS POKEMONES

  const getPokemons = async () => {
    const pokemon = await getAllPokemons();
    setPokemones(pokemon);


  }

  
  let newPokemons = pokemones.filter(pokemon => {
    return pokemon.name.indexOf(namePokemon.toLowerCase().trim()) >= 0
  })



  const {lastPage,pagesInBlock,pokemonsInPage} = pagination(currentPage,newPokemons);
  

  const hanledClickPreviusPage=()=>{
    const newCurrentpage = currentPage - 1;
    if(newCurrentpage>=1){
      setCurrentType(newCurrentpage)
    }
  }

  const hanledClickNextPage = ()=>{
    const newCurrentpage = currentPage + 1
    if(newCurrentpage<=lastPage){
      setcurrentPage(newCurrentpage);
    }
  }




  // ESTE ES UN EFECTO QUE RENDERIZA TODOS LOS POKEMONES

  useEffect(() => {

    if(!currentType){
      getPokemons();
    }

  }, [currentType])



  // ESTE ES UN EFECTO QUE RENDERIZA LOS NOMBRES DE LOS POKEMONES EN EL SELECT

  useEffect(() => {

    useFetch("https://pokeapi.co/api/v2/type/").then(({ data }) => {
      const { results } = data
      setTypes(results)
    })

  }, [])

// ESTE ES UN EFECTO QUE SE EJECUTA SI HAY UN CAMBIO EN EL FILTRO DE TIPO
  useEffect(() => {
    if (currentType) {
      pokemonsByType()
    } else {
      return
    }

  }, [currentType])





  // ================================= ONSUBMIT DEL FORMULARIO

  const onSubmit = (e) => {
    e.preventDefault();

  }


// ESTA FUNCION ES PARA ACCEDER AL VALOR DEL INPUT QUE FILTRA POR NOMBRES
  const SearchPokemon = ({ target }) => {
    setNamePokemon(target.value)
    pokemonsByName();
  }









   // ============================= ESTA FUNCION ES PARA BUSCAR POR TYPO

  const pokemonsByType = () => {
    useFetch(`https://pokeapi.co/api/v2/type/${currentType}/?&limit=40`).then(({ data }) => {
      const { pokemon } = data;
      const pokemons = pokemon.map(poke => {
        return poke.pokemon
      })

      setPokemones(pokemons)

    })

    if (!currentType) {
      getPokemons()
    }



  }




//  ESTA FUNCION OBSERVA LOS LOS CAMBIOS HECHOS EN EN SELECT, OBTIENE EL VALOR Y LO ESTEBLECE EN setCurrentType
  const hanledType = ({ target }) => {
    setCurrentType(target.value)

  }


  useEffect(() => {
   setcurrentPage(1)
  }, [namePokemon])
  


  return (
    <>
    <Header />

      <div className="container_pokedex">
        <h3><span className='color_span'>Welcome {nameTraine},</span> here you can find your favorite pokemon</h3>
        <div className="grid_search">

          <form onSubmit={onSubmit} className="container_search_pokemon">
            <input id="name_pokemon" value={namePokemon} onChange={SearchPokemon} type="text" placeholder='Buscar un pokemón' />
            <button className='btn_pokemo'>Buscar</button>
          </form>

          <div className="container_filter_pokemon">
            <select onChange={hanledType} name="" id="">
              <option className='opcion' value="">Todos los pokemones</option>
              {
                types?.map(type => (
                  <option id='poke' key={type.url} value={type.name}>{type.name}</option>
                ))
              }
            </select>
          </div>
        </div>

      </div>

      <div className="pokemon_grid">
        {
          pokemonsInPage.map(pokemon => (
            <PokemonCard key={pokemon.url} pokemonUrl={pokemon} />
          ))
        }


      </div>

      <div className="container_pagination">
      <p onClick={()=> setcurrentPage(1)} className='numbre_page'>{"<<"}</p>
        <p onClick={hanledClickPreviusPage} className='numbre_page' >{"<"}</p>
        {
          pagesInBlock.map(numberPages=>(
            <p key={numberPages} onClick={()=> setcurrentPage(numberPages)} className={`numbre_page ${numberPages === currentPage ? "color_page" : ""}`}>{numberPages}</p>
          ))
        }
         <p onClick={hanledClickNextPage} className='numbre_page'>{">"}</p>
         <p onClick={()=> setcurrentPage(lastPage)} className='numbre_page'>{">>"}</p>
      </div>

    </>
  )
}
