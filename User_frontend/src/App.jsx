import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AddEvent from './pages/CreateEvent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='m-2 rounded-lg ' >
           <img className='rounded-lg' src="/Hero img.png" alt="" />
    </div>
    

    <Home/>
   

    <Footer/>

     
    </>
  )
}

export default App
