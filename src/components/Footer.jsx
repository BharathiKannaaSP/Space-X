import React from 'react'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {SiTesla} from 'react-icons/si'

import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer'>
        <center>
          <span style={{color:'gray',fontSize:'12px',fontFamily:'serif',fontWeight:'800'}}>SpaceX &#169; 2022</span>
        <a href='https://www.twitter.com' target='_blank' className='twitter'><AiOutlineTwitter size={30} color='#00acee' style={{marginRight:'5px'}}/>TWITTER</a>
        <a href='https://www.instagram.com' target='_blank' className='insta'><AiOutlineInstagram size={30} color='#8a3ab9' style={{marginRight:'5px'}}/>INSTAGRAM</a>
        <a href='https://www.fb.com' target='_blank' className='fb'><AiOutlineFacebook size={30} color='#4267B2' style={{marginRight:'5px'}}/>FACEBOOK</a>
        <a href='https://www.tesla.com' target='_blank' className='tesla'><SiTesla size={30} color='#e82127' style={{marginRight:'5px'}}/>TESLA</a>
        </center>
        
    </div>
  )
}

export default Footer