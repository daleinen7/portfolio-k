import React from 'react'

import styled from 'styled-components'

const StyledListItem = styled.li`
  transition: color 0.3s;
  &:hover {
    color: var(--green);
  }
`

const Reveal = styled.aside`
  position: absolute;
  height: 5rem;
  margin-top: ${(props) => (props.top ? '-107px' : '104px')};
  width: clamp(8rem, 12rem, 24%);
  margin-left: clamp(-4rem, -6rem, -12%);
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: white;
  
  h4 {
    margin: 0;
    padding: 0 0 0.5rem 0;
  }
  
  .reveal-content {
    position: absolute;
    ${props => props.top ? 
        "bottom: 0;"
      :
        "top: 0;"  
      }
    border: 2px solid var(--pale-green);
    border-radius: 8px;
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
  }
  
`

export default function Skill({ title, skill, description, top }) {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <StyledListItem
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && 
          <Reveal top={top}>
            <div className="reveal-content">
              <h4>{title}</h4>
              {description}
            </div>
          </Reveal>
        }
        {skill}
      </StyledListItem>
    </>
  )
}
