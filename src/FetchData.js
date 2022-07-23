import React from 'react'
import {useState, useEffect} from "react"

export default function FetchData() {
    const [stories, setStories] = useState([])
    const url = "http://hn.algolia.com/api/v1/search?"

    useEffect(()=>{
        const readStories = async ()=>{
            const response = await fetch(url)
            if(response.ok){
            const jsonStory = await response.json()
            console.log(jsonStory)
            setStories(jsonStory.hits)
            }
        }
        readStories()
    }, [])
    
  return stories;
}
