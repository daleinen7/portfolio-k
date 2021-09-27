import { useState, useEffect } from 'react'
import styled from 'styled-components'
import linePortrait from '../static/portrait.png'
import line from '../static/line.png'

const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: calc(${(props) => props.windowHeight}px / 3 + 3rem);
  z-index: -1;
`
const StyledPortrait = styled.img`
  width: 500px;
`
const Line = styled.img`
  position: relative;
  left: 40px;
`
export default function Background() {
  const [windowHeight, setWindowHeight] = useState()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  return (
    <StyledBackground windowHeight={windowHeight}>
      <StyledPortrait src={linePortrait} alt="Doug" />
      <Line src={line} />
    </StyledBackground>
  )
}
