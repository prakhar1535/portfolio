import React from 'react'
import Three from '../src/components/three'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import './App.css'
const App = () => {

const Test = styled.div`
position: 'relative'
`

  return (
  <div>
    <Three/>
    <Test>
      <Navbar/>
    </Test>
  </div>  

  )
}

export default App