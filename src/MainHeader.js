import React from 'react'
import './MainHeader.css';

export default function MainHeader() {
  return (
    <div className='MainHeaderContainer'>
        <div className='Mainheaderlogo'>
        <h1>H</h1>
        </div>

        <div className='Search-wrap'>
            <p className='search-p'>Search</p>
            <p>Hacker News</p>
        </div>

        <div className='search-input'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search stories by title, url or author"/>
        </div>
        <div className='settings'>
        <i className="fa-solid fa-gear"></i>
        <p>Settings</p>
        </div>
    </div>

  )
}
