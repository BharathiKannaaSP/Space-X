import React from 'react'
import '../../styles/falconheavy.css'
import falconheavy from '../../assets/falconheavy.webp'
import video5 from '../../assets/video5.mp4'
import { Parallax } from 'react-parallax'
import Text2 from '../../components/Text2'
import HomeNavbar from '../../components/HomeNavbar'
import Footer from '../../components/Footer'
function FalconHeavy() {
  return (
    <>
    <HomeNavbar />
      <div className='falcon9'>
        <div id='falcon9'>
            <div className='content3'>
                <video src={video5} className='falcon9_video' autoPlay loop muted></video>
                <h1 className='falcon9_h1'>FALCON HEAVY<br/>
                <span className='span_falconheavy'>THE WORLD'S MOST POWERFUL ROCKET</span>
                </h1>
            
            </div>
       </div>

    <div className='falcon9_content'>
          <div className='falcon9_launch'>
            <h1 className='numbers'>3</h1>
            <h1>TOTAL LAUNCHES</h1>
          </div>
          
        <div className='falcon9_launch'>
           <h1 className='numbers'>7</h1>
           <h1>TOTAL LANDINGS</h1>
        </div>
           
        <div className='falcon9_launch'>
           <h1 className='numbers '>4</h1>
           <h1>REFLOWN ROCKETS</h1>
        </div>
    </div>

    <center>
      <div className='overview'>
          <h1 className='overview_title'>FALCON HEAVY</h1>
          <h2   style={{color:'#fff',marginLeft:'0%',padding:'10px'}}>OVERVIEW</h2>
          <div style={{margin:'50px 10px 0 0'}}>
            <Parallax bgImage={falconheavy} strength={500} className='falcon9_img parallax'></Parallax>
          </div>
          <div style={{padding:'20px',margin:'20px -20px'}}>
            <h3>HEIGHT</h3>
            <h3>70 m / 229.6 ft</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>WIDTH</h3>
            <h3>12.2 m / 39.9 ft</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>MASS</h3>
            <h3>1,420,788 kg / 3,125,735 lb</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>PAYLOAD TO LEO</h3>
            <h3>63,800 kg / 140,660 lb</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>PAYLOAD TO GTO</h3>
            <h3>	26,700 kg / 58,860 lb</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>PAYLOAD TO MARS</h3>
            <h3>16,800 kg / 37,040 lb</h3>
          </div>
      </div>
      <Text2/>
      </center>
   </div>
      <Footer/>
   </>
    
  )
}

export default FalconHeavy