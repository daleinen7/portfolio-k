import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import linePortrait from '../static/portrait.png'
import softwareLine from '../static/line.png'
import audioLine from '../static/audioLine.png'

const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 952px;
  top: calc(${(props) => props.windowHeight - 362}px);
  z-index: -1;
  padding-left: 180px;

  @media (max-width: 1016px) {
    padding-left: 70px;
  }

  @media (max-width: 968px) {
    padding-left: 0;
    width: 300px;
    left: 50%;
    margin-left: -150px;
  }
`
const StyledPortrait = styled.img`
  width: 300px;
`
const Line = styled.img`
  position: relative;
  right: 124px;
  top: -2px;

  @media screen and (max-width: 968px) {
    display: none;
  }
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
        <Line src={softwareLine} alt="parker jotter drawing"/>
      )}
    </StyledBackground>
  )
}
