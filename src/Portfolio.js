import React from 'react'
import './Portfolio.css'
import space from './images/space.jpg'
import port from './images/port.jpg'
import launch from './images/launch.jpg'
import datas from './data.json'
function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio__Header'>
                <h2>PORTFOLIO</h2>

            </div>
            <div className='portfolio__Body'>

                <div className='portfolio__Content'>
                   {
                        datas.projects.map(({title, image, live, github, summary}) => (
                            <div className='portfolio__Card'>
                            <img src={image?image:space}/>
                            <div className='portfolio__CardContent'>
                            <h1 className=''>{title}</h1>
                                <p className='portfolio__About'>
                                { summary}</p>
                                <div className='portfolio__Buttons'>
                                    <a className='portfolio__Button' href={live} target="_blank" rel="noopener">Live site</a>
                                    <a className='portfolio__Button' href={github} target="_blank" rel="noopener">Github code</a>
    
                                </div>
                            </div>
                        </div>  
                       ))
                   }
                  
                </div>
            </div>
        </div>
    )
}

export default Portfolio
