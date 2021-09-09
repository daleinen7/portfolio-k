import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Audio from './Audio'
import Software from './Software'

import styled from 'styled-components'

const Container = styled.div`
  background: #181818;
`

export default function App() {
  return (
    <Container>
      <header>
        <h1>
          <span className="green">Hi. I'm</span> Doug.
        </h1>
        <p role="doc-subtitle">Software Developer, Audio Nerd</p>
      </header>
      <nav>
        <Link to="/software">Software Stuff</Link>
        <Link to="/audio">Audio Stuff</Link>
      </nav>
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
