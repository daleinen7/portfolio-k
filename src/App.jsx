import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Audio from './components/Audio'
import Software from './components/Software'

export default function App() {
  return (
    <>
      <header>
        <h1>Hi. I'm Doug.</h1>
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
    </>
  )
}
