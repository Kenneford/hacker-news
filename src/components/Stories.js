import React from 'react'
import './Stories'
import FetchData from '../FetchData'
import {Link} from 'react-router-dom'

export default function Stories() {
    const stories = FetchData()
  return (
    <div>
        {stories.map((story, index) =>{
            return(
                <div key={index} className="story-wrap">
                <p className='single-story'><Link to="/story-overview">{story.title}</Link></p>
            </div>
            )
        })}
    </div>
  )
}
