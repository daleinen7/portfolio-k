import {useState} from 'react'
import styled from 'styled-components'
import backInTime from '../static/backInTime.mp3'
import brightEyed from '../static/brightEyed.mp3'
import drift from '../static/drift.mp3'

const audioProjects = [
  {
    artist: 'Muh',
    description:
      'Mixed and Mastered: Through tight collaboration of the arist I was able to deliver a focused rock album bringing isolated tracks to a cohesive vision and preserving.',
    audio: brightEyed,
    song: 'Bright Eyed',
  },
  {
    artist: 'Indigo',
    description:
      'Mastered: A laid back tune where I mostly just controlled the low-mids to make sure th eeasy going bass and vocals worked well together. Finished in a single day.',
    audio: backInTime,
    song: 'Back In Time (feat. Willow Newman)',
  },
  {
    artist: 'Black Tie Elephant',
    description:
      'Mastering: The goal was to preserve the dynamics and ambiance of the room, but pull out the clarity and volume.',
    audio: drift,
    song: 'Drift',
  },
]

const StyledSection = styled.section`
  text-align: left;
  width: 100%;

  h3 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  ul,
  h3,
  h4 {
    font-family: 'Roboto slab', serif;
  }

  ul {
    list-style-type: none;
    padding: 0;
    color: white;
    li {
      font-size: 1.875rem;
    }
  }

  h4 {
    font-size: 3.5rem;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: var(--pale-green);
  }
`

export default function Audio() {
  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState()

  const audioControls = () => {
    play ? audio.pause() : audio.play()
    setPlay(!play)
  }
  return (
    <>
      <h2 className="visually-hidden">Audio Engineer</h2>
      <StyledSection>
        <h3>What I can do for you.</h3>
        <ul>
          <li>I mix.</li>
          <li>I master.</li>
          <li>I charge $9 per minute of recorded audio.</li>
        </ul>
      </StyledSection>
      <StyledSection>
        <h3>Where I've done what I do.</h3>
        {audioProjects.map((project, idx) => {
          return (
            <article key={idx}>
              <h4>{project.artist}</h4>
              <p>{project.description}</p>4
              
            </article>
          )
        })}
      </StyledSection>
      <StyledSection>
        <h3>Why I do what I do</h3>
        <p>
          I've always felt most comfortable in the place where art and science
          and technology converge. Whether it's Audio engineering, Picture
          Framing or Software Engineering, I enjoy discovering the the best way
          to make art tangible.
        </p>
      </StyledSection>
    </>
  )
}
