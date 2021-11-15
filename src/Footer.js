import React from 'react'
import './Footer.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/PhoneAndroid'
function Footer() {
    return (
        <div className='footer'>
           
            <div className='footer__Social'>
                <a href='https://facebook.com/daramolaf3.'  target="_blank" rel="noopener"> <FacebookIcon/> </a>
                <a href='https://twitter.com/heemarle' target="_blank" rel="noopener"> <TwitterIcon/> </a>
                <a href='https://api.whatsapp.com/send?phone=08125047894&text=Hi' target="_blank" rel="noopener"> <WhatsAppIcon/> </a>
           <a href="tel:+2348125047894"><PhoneIcon/></a>
            </div>
            <h6>All rights reserved</h6>
        </div>
    )
}

export default Footer
