import { useState, useEffect } from "react";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    // const [pokemonId, setPokemonId] = useState(1)
    const [pokemonQuery, setPokemonQuery] = useState({
        id:1,
        query:''
    })
    const [loadState, setLoatState] = useState("LOADING")

    useEffect(() => {
        async function fetchPokemon() {
            let parameter = pokemonQuery.id

            if (pokemon.id == pokemonQuery.id){
                parameter = pokemonQuery.query
            }


            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ parameter }`)
            const data = await response.json()
            setPokemonQuery({
                id: data.id,
                query: pokemonQuery.query
            })
            setPokemon(data)
            setLoatState("LOADED")
        }

        fetchPokemon()
    },[pokemonQuery])

    function searchPokemon(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData.get('pokemonName'))

        setPokemonQuery(formData.get('pokemonName'))
        event.target.reset()
    }

    return (
        <div className="pokemon">
                <h1>Pokemon</h1>
                <p>Showing Pokemon ID: { pokemonQuery.id }</p>
                <form onSubmit= { searchPokemon}>
                <input type="text" name="pokemonName"/>
                <button>Search</button>
                </form>

            {
                (loadState === "LOADED") ?
                <>
                <img src={ pokemon.sprites.front_shiny || pokemon.sprites.front_default} alt="" />
            <h2>{ pokemon.name }</h2>
        <p>Height: { pokemon.height }</p>
        <p>Weight: { pokemon.weight }</p>
        <p></p>
                </> :
                <p>loading... </p>
            }
            
            <button onClick={() => setPokemonQuery(pokemonQuery.id + 1) }>Next Pokemon</button>
            {
                (pokemonQuery.id > 1) ?
                <button onClick={() => setPokemonQuery(pokemonQuery.id - 1) }>Previous Pokemon</button> :
                <></>
            }
     

        </div>
    )
}