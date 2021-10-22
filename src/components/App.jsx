import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Audio from './Audio'
import Software from './Software'
import Background from './Background'
import Footer from './Footer'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 952px) {
    width: 90%;
  }

  .isSticky {
    background: #181818;
  }
`

const Hero = styled.div`
  height: calc(100vh - 6rem);
`

const Header = styled.header`
  padding-top: calc(44vh - 92px);
  text-align: center;
  display: block;

  h1 {
    font-size: 6rem;
    font-weight: 400;
    margin: 0;
  }

  .DOUG {
    font-weight: 900;
  }

  p {
    font-size: 3rem;
    margin: 0;
  }
`
const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  display: flex;

  justify-content: space-between;
  a {
    font-family: 'Roboto Slab', serif;
    color: var(--pale-green);
    &:hover {
      font-style: italic;
      color: var(--green);
    }
  }
  .selected {
    color: white;
  }
`

export default function App() {
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()
  const ref = useRef()

  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(!entry.isIntersecting)
        },
        { threshold: [0] }
      )

    observer.observe(cachedRef)
    // unmount
    return function () {
      observer.unobserve(cachedRef)
    }
  }, [ref, setIsSticky])

  return (
    <>
      <Container>
        <Background location={location} />
        <Hero ref={ref}>
          <Header>
            <h1>
              <span className="green">Hi. I'm</span>{' '}
              <span className="DOUG">Doug.</span>
            </h1>
            <p role="doc-subtitle">Software Developer, Audio Nerd.</p>
          </Header>
        </Hero>
        <Nav className={isSticky ? 'isSticky' : ''}>
          <NavLink to="/software" activeClassName="selected">
            Software Stuff
          </NavLink>
          <NavLink to="/audio" activeClassName="selected">
            Audio Stuff
          </NavLink>
        </Nav>
        <Switch>
          <Route path="/software">
            <Software />
          </Route>
          <Route path="/audio">
            <Audio />
          </Route>
          <Route path="/">
            <Redirect to="/software" />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </>
  )
}
