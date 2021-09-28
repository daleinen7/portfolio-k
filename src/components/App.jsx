import { NavLink, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Audio from './Audio'
import Software from './Software'
import Background from './Background'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.header`
  padding-top: 3rem;
  text-align: center;

  h1 {
    font-size: 6rem;
    font-weight: 400;
    margin: 0;
  }

  .DOUG {
    font-weight: 700;
  }

  p {
    font-size: 3rem;
    margin: 0;
  }
`
const Nav = styled.nav`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin: 14rem 0;
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
  const location = useLocation()
  return (
    <Container>
      <Background location={location} />
      <Hero>
        <Header>
          <h1>
            <span className="green">Hi. I'm</span>{' '}
            <span className="DOUG">Doug.</span>
          </h1>
          <p role="doc-subtitle">Software Developer, Audio Nerd.</p>
        </Header>
        <Nav>
          <NavLink to="/software" activeClassName="selected">
            Software Stuff
          </NavLink>
          <NavLink to="/audio" activeClassName="selected">
            Audio Stuff
          </NavLink>
        </Nav>
      </Hero>
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
  )
}
