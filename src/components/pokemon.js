import { useState, useEffect } from "react";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            const data = await response.json()
            setPokemon(data)
        }

        fetchPokemon()
    },[])

    return (
        <div className="pokemon">
            <img src={ pokemon.sprites?.front_default } alt="" />
            <h2>{ pokemon.name }</h2>
        <p>Height: { pokemon.height }</p>
        <p>Weight: { pokemon.weight }</p>
        <p></p>
        </div>
    )
}