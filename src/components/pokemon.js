import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../contexts/dataProvider';


export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    const [loadState, setLoadState] = useState("LOADING")
    const { fetchPokemon } = useContext(DataContext)
    
    async function handleFetchPokemon(parameter) {
        const data = await fetchPokemon(parameter)
        console.log("API REQUEST")
        // setPokemonId(data.id)
        setPokemon(data)
        // setPokemonQuery("")
        setLoadState("LOADED")
    }

    useEffect(() => {
            handleFetchPokemon(1)
    }, [])

    function searchPokemon(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
         if (formData) {
        console.log(formData.get('pokemonName'))

        handleFetchPokemon(formData.get('pokemonName'))

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
                    handleFetchPokemon(pokemon.id)
                }}>Previous Pokemon</button>
                : <></>
            }
            <button onClick={() => {
                    pokemon.id++
                    handleFetchPokemon(pokemon.id)
            }}>Next Pokemon</button>
        </div>
    )
}