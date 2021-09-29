import { useState } from 'react'
import useSound from 'use-sound'
import styled from 'styled-components'
import playButton from '../static/play.png'
import pauseButton from '../static/pause.svg'
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
      'Mastered: A laid back tune where I mostly just controlled the low-mids to make sure th easy going bass and vocals worked well together. Finished in a single day.',
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
  width: 750px;

  h3 {
    font-size: 3.625rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  h4 {
    font-size: 2.875em;
    margin: 0;
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

  p {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: var(--pale-green);
  }

  article {
    margin-bottom: 3rem;
  }
`

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export default function Audio() {
  const [playingBE, setPlayingBE] = useState(false)
  const [playingD, setPlayingD] = useState(false)
  const [playingBIT, setPlayingBIT] = useState(false)

  const [song, setSong] = useState(brightEyed)

  const [play, { stop }] = useSound(song)

  const setPlaying = [setPlayingBE, setPlayingD, setPlayingBIT]
  const playing = [playingBE, playingD, playingBIT]
  const player = [brightEyed, drift, backInTime]

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
              <p>{project.description}</p>
              <PlayButton
                onMouseDown={() => {
                  stop()
                  setSong(player[idx])
                }}
                onClick={() => {
                  setPlaying.forEach((playingStatus) => {
                    playingStatus(false)
                  })
                  play()
                  setPlaying[idx](!playing[idx])
                }}
                // onClick={() => {
                //   setPlaying.forEach(playingStatus => {
                //     setPlaying(playingStatus(false))
                //   })
                //   playing[idx] ? stop() : play()
                //   setPlaying[idx](!playing[idx])
                // }}
              >
                <img
                  src={playing[idx] ? pauseButton : playButton}
                  alt="audio control play/pause"
                />
              </PlayButton>
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
