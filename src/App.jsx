import React from 'react'
import Figma from './components/Figma/shop'
import Section from './components/section-2/tea'
import Testimonials from './components/Testimonials/test'
import Frangnant from './components/Frangnant/fres'
const App = () => {
  let name = "Laylo"
  return (
    <div>
      
      <Figma/>
      <Section/>
      <Frangnant/>
      <Testimonials/>

    </div>
  )
}

export default App