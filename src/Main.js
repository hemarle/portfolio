import React from 'react'
import './Main.css'
import woman from './images/femi.jpg'
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Main() {
    return (
        <div className='main'>
            <div className='main__Image'>
                <img src={woman}
                    alt='My-Image'/>
            </div>

            <div className='main__Content'>
                <div className='main__Details'>
                    <h2 className='main__Greeting'>Hi, I am
                    </h2>
                    <h1 className='main__Name'>
                        Daramola femi
                    </h1>
                    <p className='main__Role'>Web Developer</p>
                </div>

                <div className='main__Social'>
                    <a href='https://github.com/hemarle'> <GitHubIcon/> </a>
                    <a href='https://linkedin.com/in/oluwafemi-daramola-04832416a'> <LinkedInIcon/> </a>
                    <a a href="mailto:dfmopeoluwa@gmail.com"><MailIcon/></a>
                 
                </div>


            </div>
        </div>
    )
}

export default Main
