import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import FetchData from './FetchData';
import StoriesHeader from './components/StoriesHeader';
import Stories from './components/Stories';


function App() {
  return(
    <div className='App'>
        <StoriesHeader />
        <Stories />
    </div>
  )
}

export default App;
