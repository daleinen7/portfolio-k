import React from 'react'

import styled from 'styled-components'

const Reveal = styled.aside`
  position: absolute;
  margin-top: ${(props) => (props.top ? '-120px' : '110px')};
  width: clamp(8rem, 12rem, 24%);
  margin-left: clamp(-4rem, -6rem, -12%);
  font-size: 1rem;
  border: 2px solid var(--pale-green);
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  background: #2f2c2c;
  
  &:after {
    content: '';
    position: absolute;
    top: ${props => props.top ? '100%' : '-4px'} ;
    bottom: ${props => props.top ? '0' : '100%'} ;
    left: 50%;
    height: 20px;
    width: 20px;
    background: #2f2c2c;
    ${props => props.top ? 
      "transform: rotate(45deg) translate(-50%);"
    :
      "transform: rotate(225deg) translate(50%);"  
    }
    border-bottom: inherit;
    border-right: inherit;
    box-shadow: inherit;
  }
`

export default function Skill({ skill, description, top }) {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <li
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && <Reveal top={top}>{description}</Reveal>}
        {skill}
      </li>
    </>
  )
}
