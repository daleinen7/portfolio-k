import { Link, Switch, Route } from 'react-router-dom'
import Audio from './Audio'
import Software from './Software'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.header`
  padding-top: 3rem;
  text-align: center;

  h1 {
    font-size: 6rem;
    font-weight: 400;
    margin: 0;
  }

  p {
    font-size: 3rem;
    margin: 0;
  }
`
const Nav = styled.nav`
  width: 80%;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  a {
    font-family: 'Roboto Slab', serif;
    color: white;
    &:hover {
      color: var(--green);
    }
  }
`

export default function App() {
  return (
    <Container>
      <Header>
        <h1>
          <span className="green">Hi. I'm</span> Doug.
        </h1>
        <p role="doc-subtitle">Software Developer, Audio Nerd</p>
      </Header>
      <Nav>
        <Link to="/software">Software Stuff</Link>
        <Link to="/audio">Audio Stuff</Link>
      </Nav>
      <Switch>
        <Route path="/software">
          <Software />
        </Route>
        <Route path="/audio">
          <Audio />
        </Route>
        <Route path="/">
          <Software />
        </Route>
      </Switch>
    </Container>
  )
}
