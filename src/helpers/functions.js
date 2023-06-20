export const colorType=(types = [])=>{
    const nameTypes =  types.map(type=>type.type.name);
    if(nameTypes[0] === "normal" && nameTypes.length>1){
      return nameTypes[1]
    }else{
      return nameTypes[0]
    }
  }

  export const pagination = (currentPage,pokemones) =>{
    const POKEMONS_PER_PEGE =12
    
    const sliceStar = (currentPage - 1 ) * POKEMONS_PER_PEGE;
    const sliceEnd = sliceStar + POKEMONS_PER_PEGE
    const pokemonsInPage = pokemones.slice(sliceStar,sliceEnd)

    const lastPage = Math.ceil(pokemones.length / POKEMONS_PER_PEGE) || 1;


    const PAGES_PER_BLOCK = 5;
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

    const pagesInBlock = [];
    const minPage = (actualBlock -1) * PAGES_PER_BLOCK + 1;
    const maxPage = actualBlock * PAGES_PER_BLOCK;

    for( let i = minPage; i<=maxPage; i++){
      if(i<=lastPage){
        pagesInBlock.push(i)
      }
     
    }

    return{
      pokemonsInPage,
      lastPage,
      pagesInBlock
    }
  }