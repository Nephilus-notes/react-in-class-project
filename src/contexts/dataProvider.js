import {useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs,  } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [posts, setPosts] = useState ([])


    useEffect(() => {
        async function getPosts(){
            const response = await fetch("https://chief-flat-goose.glitch.me/api/posts")
            const data = await response.json()
            setPosts(data)
            console.log(data)
        }
    
        getPosts()
    },[])

    async function getPost(id){
        const response = await fetch(`https://chief-flat-goose.glitch.me/api/post/${id}`)
        const data = await response.json()
        return data
    }

    async function fetchPokemon(parameter) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
    const data = await response.json()
    console.log("API REQUEST")
    return data

    }

const value = {
    posts,
    getPost,
    fetchPokemon
}

    return (
        <DataContext.Provider value={ value }>
            { props.children }
        </DataContext.Provider>
    )
}