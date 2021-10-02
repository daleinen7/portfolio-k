import { useState, useEffect } from 'react'
import styled from 'styled-components'
import linePortrait from '../static/portrait.png'
import softwareLine from '../static/line.png'
import audioLine from '../static/audioLine.png'

const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: calc(${(props) => props.windowHeight}px / 1.7);
  z-index: -1;
`
const StyledPortrait = styled.img`
  width: 380px;
`
const Line = styled.img`
  position: relative;
  right: 72px;
  top: -2px;
`
export default function Background({ location }) {
  const [windowHeight, setWindowHeight] = useState()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  return (
    <StyledBackground windowHeight={windowHeight}>
      <StyledPortrait src={linePortrait} alt="Doug" />
      {location.pathname === '/audio' ? (
        <Line src={audioLine} alt="audio cable drawing" />
      ) : (
        <Line src={softwareLine} />
      )}
    </StyledBackground>
  )
}
