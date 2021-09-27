import { useState, useEffect } from 'react'
import styled from 'styled-components'
import linePortrait from '../static/portrait.png'

const StyledBackground = styled.div`
  position: absolute;
  top: calc(${props => props.windowHeight}px / 3 + 1rem);
`
const StyledPortrait = styled.img`
  width: 500px;
  z-index: -1;
`
export default function Background() {

  const [windowHeight, setWindowHeight] = useState()
  
  useEffect(()=> {
    setWindowHeight(window.innerHeight)
  }, [])
  
  return (
    <StyledBackground windowHeight={windowHeight}>
      <StyledPortrait src={linePortrait} alt="Doug" />
    </StyledBackground>
  )
}
