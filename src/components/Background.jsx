import styled from 'styled-components'
import linePortrait from '../static/portrait.png'

const StyledBackground = styled.div`
  position: absolute;
  top: 14rem;
`
const StyledPortrait = styled.img`
  width: 500px;
  z-index: -1;
`
export default function Background() {
  return (
    <StyledBackground>
      <StyledPortrait src={linePortrait} alt="Doug" />
    </StyledBackground>
  )
}
