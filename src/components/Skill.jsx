import React from 'react'

import styled from 'styled-components'

const Reveal = styled.aside`
  position: absolute;
  margin-top: ${(props) => (props.top ? '-70px' : '120px')};
  max-width: 30%;
  font-size: 1rem;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  background: #2f2c2c;
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid black;
    left: -8px;

    top: 7px;
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
