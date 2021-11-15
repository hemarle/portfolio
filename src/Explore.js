import React from 'react'
import './Explore.css'
import maintenance from './images/maintenance.png'
import developer from './images/developer.png'
import satisfaction from './images/satisfaction.png'
import seperator from './images/separator.png'
function Explore() {
    return (
        <div className='explore'>
             <h2 className='explore__Skills'>SKILLS</h2>
            <div className='explore__Image'>
                <img className='explore__Separator' src={seperator}/>
            </div>

            <div className='explore__Content'>
                <div className='explore__Card'>
                    <div className='explore__CardHeader'>
                    <img src={developer}/>
                    <h2 className='explore__Title'>
                        Development
                    </h2>
                    </div>
                    <p className='explore__Details'>Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.</p>
                </div>

                <div className='explore__Card'>
                    <div className='explore__CardHeader'>
                    <img src={maintenance}/>
                    <h2 className='explore__Title'>
                       Maintenance
                    </h2>
                    </div>
                    <p className='explore__Details'>
                    In case of any problems or the need for changes, I can introduce new functionalities and solutions.

</p>
                </div>

                <div className='explore__Card'>
                    <div className='explore__CardHeader'>
                    <img src={satisfaction}/>
                    <h2 className='explore__Title'>
                        Satisfaction
                    </h2>
                    </div>
                    <p className='explore__Details'>You get maximum satisfaction on any project you give to me.</p>
                </div>
            </div>

            <div className='explore__Image'>
                <img className='explore__Separator' src={ seperator}/>
            </div>
        </div>
    )
}

export default Explore
