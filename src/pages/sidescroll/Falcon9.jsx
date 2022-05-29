import React from 'react'
import '../../styles/falcon9.css'
import falcon9 from '../../assets/falcon9.webp'
import video1 from '../../assets/video2.mp4'
import { Parallax } from 'react-parallax'
import Text3 from '../../components/Text3'
import HomeNavbar from '../../components/HomeNavbar'
import Footer from '../../components/Footer'
function Falcon9() {
  return (
    <>
    <HomeNavbar />
      <div className='falcon9'>
        <div id='falcon9'>
            <div className='content3'>
                <video src={video1} className='falcon9_video' autoPlay loop muted></video>
                <h1 className='falcon9_h1'>FALCON 9<br/>
                <span className='span_falcon9'>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</span>
                </h1>
            
            </div>
       </div>

    <div className='falcon9_content'>
          <div className='falcon9_launch'>
            <h1 className='numbers'>155</h1>
            <h1>TOTAL LAUNCHES</h1>
          </div>
          
        <div className='falcon9_launch'>
           <h1 className='numbers'>155</h1>
           <h1>TOTAL LANDINGS</h1>
        </div>
           
        <div className='falcon9_launch'>
           <h1 className='numbers '>94</h1>
           <h1>REFLOWN ROCKETS</h1>
        </div>
    </div>

    <center>
      <div className='overview'>
          <h1 className='overview_title'>FALCON 9</h1>
          <h2   style={{color:'#fff',marginLeft:'0%',padding:'10px'}}>OVERVIEW</h2>
          <div style={{margin:'50px 200px 0 0'}}>
            <Parallax bgImage={falcon9} strength={500} className='falcon9_img parallax'></Parallax>
          </div>
          <div style={{padding:'20px',margin:'20px -20px'}}>
            <h3>HEIGHT</h3>
            <h3>123.5 meters</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>DIAMETER</h3>
            <h3>3.7 m / 12 ft</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>MASS</h3>
            <h3>549,054 kg / 1,207,920 lb</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>PAYLOAD TO LEO</h3>
            <h3>22,800 kg / 50,265 lb</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>PAYLOAD TO GTO</h3>
            <h3>8,300 kg / 18,300 lb</h3>
            <span style={{margin:'20px'}}>_____________________________________________________________________________________________________________________</span>
            <h3>PAYLOAD TO MARS</h3>
            <h3>4,020 kg / 8,860 lb</h3>
          </div>
      </div>
           <Text3/>
      </center>
       </div>
       <Footer/>
      
   </>
    
  )
}

export default Falcon9