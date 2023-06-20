export const colorType=(types = [])=>{
    const nameTypes =  types.map(type=>type.type.name);
    if(nameTypes[0] === "normal" && nameTypes.length>1){
      return nameTypes[1]
    }else{
      return nameTypes[0]
    }
  }