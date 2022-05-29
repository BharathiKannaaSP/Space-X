import React,{useState,useEffect} from 'react';
import { RingLoader } from 'react-spinners';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Alert from './components/Alert';
import HomeNavbar from './components/HomeNavbar'
import { UserState } from './Context';
import Auth from './pages/Auth';
import Falcon9 from './pages/sidescroll/Falcon9';
import Falconheavy from './pages/sidescroll/Falconheavy';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
function App() {
  const[loading,setLoading]=useState(false)
  const {user} = UserState()
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  const override={
    display:'flex',
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',

    
  }

  return (
    <div>
    {
      loading ?

      <RingLoader
      css={override}
      size={50}
      color={"#000"}
      loading={loading}/>
      :
    
    <div className="App">
    {!user ?
<>
<Routes>
    <Route exact path ='/' element={<Auth/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="*" element={<Error/>}/>

    </Routes>
    <Alert/>
    </>

      :
      <>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/falcon9" element={<Falcon9/>}/>
          <Route path="/falconheavy" element={<Falconheavy/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="*" element={<Error/>}/>

        </Routes>

        <Alert/>
        </>
          
     
    }
    </div>
    }
    </div>
    );
}

export default App;
