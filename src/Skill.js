import React from 'react'
import './Skill.css'
import html from './images/html.png'
import Explore from './Explore.js'
import datas from './data.json'
function Skill() {
    let screenSize = window.screen.width
    console.log(datas.skills)
    return (
        <div className='skill'>

            <div className='skill__Using'>
                <h1 className='skill__Header'>Using now:</h1>
                <div className='skill__Content'>


                    {
                    datas.skills.map((data) => (
                        <div className='skill__Card'>
                            <img className='skill__CardImage'
                                src={data.image}/>
                            <p>{
                                data.name
                            }</p>
                        </div>
                    ))
                } </div>
            </div>

            <div className='skill__Using'>

                <h1 className='skill__Header'>Learning:</h1>
                <div className='skill__Content'>
                    {
                        datas.learning.map(data => (
                           
                    <div className='skill__Card'>
                        <img className='skill__CardImage'
                            src={data.image}/>
                                <p>{ data.name}</p>
                    </div>
                       )) 
                    }
                  
                </div>
            </div>


        </div>
    )
}

export default Skill
