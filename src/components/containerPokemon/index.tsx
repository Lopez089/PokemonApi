import React, {useState} from 'react'
import Pokemon from '../pokemon/index'


interface IPokemon {
    name: string
    url: string
}


const ContainerPokemon = ()=> {
    const [listPokemon, setListPokemon] = useState<IPokemon[]>([])

    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then(res=> res.json())
    .then(data=> setListPokemon(data.results))


    return (<>
        {
            listPokemon.map(pokemon=>{
               console.log(pokemon.url)
                return <Pokemon name={pokemon.url}/>
            })
        }
    
    
    </>)
}

export default ContainerPokemon