import {useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs, collection, doc, getDoc, Timestamp, addDoc, orderBy, query } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [posts, setPosts] = useState ([])


    useEffect(() => {
        async function getPosts(){
            // const querySnapshot = await getDocs(collection(db, 'posts'))
            // // setPosts(data)
            const postDocs = []
            const q = query(collection(db, 'posts'), orderBy('date_created', 'desc'))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                postDocs.push({
                    id: doc.id,
                    ...doc.data()
                })
            } 
                ) 
                console.table(postDocs)
                setPosts(postDocs)
        }
    
        getPosts()
    },[])

    async function loadPost(id){
        // const response = await fetch(`https://chief-flat-goose.glitch.me/api/post/${id}`)
        // const data = await response.json()
        // return data
        const docRef = doc(db, 'posts', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            }
        } else{
            console.log(`Post with id ${id} does not exist`)
        }
    }

    async function addPost(title, body) {
        const newPost = {
            title: title,
            body:body,
            username: 'ctemple',
            date_created: Timestamp.now()
        }

        const doc = await addDoc(collection(db, 'posts'), newPost)

        newPost.id = doc.id
        setPosts([newPost, ...posts])
    }

    async function fetchPokemon(parameter) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
    const data = await response.json()
    console.log("API REQUEST")
    return data

    }

const value = {
    posts,
    loadPost,
    fetchPokemon,
    addPost
}

    return (
        <DataContext.Provider value={ value }>
            { props.children }
        </DataContext.Provider>
    )
}