import React, {useEffect} from 'react'
import './App.css'
import About from './About'
import Explore from './Explore'
import Main from './Main'
import Skill from './Skill'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import axios from 'axios'

function App() {
    useEffect(() => {
     axios.get('https://api.github.com/users/hemarle').then((response)=>console.log(response))   
    },[])
    return (
        <div className='app'>
            <Main />
            <About />
            <Explore />
            <Skill />
            <Portfolio />
            <Contact />
            <Footer/>
        </div>
    )
}

export default App
