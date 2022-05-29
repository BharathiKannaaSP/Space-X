import React from 'react'
import {Canvas} from 'react-three-fiber';
import Stand from '../components/Stand';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';
import { UserState } from '../Context';
function UserProfile() {
  const {user} = UserState()
  return (
    <Name name={user.email} age='21'/>
  )
}

function Name(props) {
  return (
    <>
    <HomeNavbar/>
    
      <div style={{height:'95vh',backgroundColor:'rgba(0,0,0,.84)',zIndex:'-1'}}>
        {/* Using three */}
    <Canvas  >
      {/* For zoom false in @react-three-drei */}
      <OrbitControls enableZoom={true}/>
      {/* light effects */}
      <directionalLight intensity={0.5}  />
      <ambientLight intensity={0.2} />
      {/* data a component is reading is not ready yet. React can then wait for it to be ready and update the UI. */}
      <Suspense fallback={null}>
        {/* animation file created using blender (.fbx->.glb(npx gltfjsx filename) -> import ) */}
      <Stand style={{padding:"20px"}}/>
      </Suspense>
    </Canvas>
    <div style={{backgroundColor:'rgba(0,0,0,.84)',marginTop:'-120px',zIndex:-1}}>
    <center>
    <h1>{props.name}</h1>
    <p style={{color:'gray'}}>{props.age}</p>
    <span style={{color:'#fff'}}>7525 Mountainview St. New York, NY - 10040</span>
    </center>
    </div>
    </div>
    <Footer/>

    </>
  )
}

export default UserProfile