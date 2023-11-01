import React from 'react'
import './App.css'
import Hero from '../components/Hero/Hero'
import Programs from '../components/Programs/Programs'
import Reasons from '../components/Reasons/Reasons'
import Tips from '../components/Tips/Tips'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="App">
    <><Hero /><Programs /><Reasons /><Tips/><Footer /></>
    </div>
  )
}
export default Home
