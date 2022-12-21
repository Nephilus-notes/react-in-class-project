import { useState, useEffect } from 'react'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    // const [pokemonId, setPokemonId] = useState(1)
    // const [pokemonQuery, setPokemonQuery] = useState("pikachu")
    const [loadState, setLoadState] = useState("LOADING")
    
    async function fetchPokemon(parameter) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
        const data = await response.json()
        console.log("API REQUEST")
        // setPokemonId(data.id)
        setPokemon(data)
        // setPokemonQuery("")
        setLoadState("LOADED")
    }

    useEffect(() => {
            fetchPokemon(1)
    }, [])

    function searchPokemon(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
         if (formData) {
        console.log(formData.get('pokemonName'))

        fetchPokemon(formData.get('pokemonName'))

        event.target.reset()
         }

    }

    return (
        <div className='pokemon'>
            <h1>Pokemon</h1>
            <p>Showing pokemon ID: { pokemon.id }</p>
            <form onSubmit={searchPokemon}>
                <input type="text" name="pokemonName" />
                <button>Search</button>
            </form>
            {
                (loadState === 'LOADED') ?
                <>
                    <img src={ pokemon.sprites.front_default } alt="" />
                    <h2>{ pokemon.name }</h2>
                    <p>Height: { pokemon.height }</p>
                    <p>Weight: { pokemon.weight }</p>    
                </> :
                <p>Loading...</p>
            }
            {
                (pokemon.id > 1) ?
                <button onClick={() => {
                    pokemon.id--
                    fetchPokemon(pokemon.id)
                }}>Previous Pokemon</button>
                : <></>
            }
            <button onClick={() => {
                    pokemon.id++
                    fetchPokemon(pokemon.id)
            }}>Next Pokemon</button>
        </div>
    )
}