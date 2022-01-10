import React, { useState } from 'react'
import useSound from 'use-sound'
import styled from 'styled-components'
import playButton from '../static/play.png'
import pauseButton from '../static/pause.svg'
import backInTime from '../static/backInTime.mp3'
import brightEyed from '../static/brightEyed.mp3'
import drift from '../static/drift.mp3'
import ScrollToTop from './ScrollToTop'

const audioProjects = [
  {
    artist: 'Muh',
    description:
      'Mixed and Mastered: Through tight collaboration of the arist I was able to deliver a focused rock album bringing isolated tracks to a cohesive vision and preserving the initial inspiration of the recordings.',
    audio: brightEyed,
    song: 'Bright Eyed',
  },
  {
    artist: 'Indigo',
    description:
      'Mastered: A laid back tune where I mostly just controlled the low-mids to make sure the easy going bass and vocals worked well together. Finished in a single day.',
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
  max-width: 750px;
  margin-left: 9rem;

  @media (max-width: 968px) {
    margin: 0 2rem;
  }

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

  a {
    font-family: 'Roboto slab', serif;
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: underline;
    color: white;
    &:hover {
      font-style: italic;
    }
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
    font-size: 2.25rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: var(--pale-green);
  }

  article {
    margin-bottom: 3rem;
  }

  &:first-of-type {
    margin-top: 560px;

    @media (max-width: 968px) {
      margin-top: 70px;
    }
  }

  .playerControls {
    display: flex;
    align-items: center;
  }
`

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const SongProgress = styled.span`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 36px;
  /* color: white; */
  padding: 14px;
`

export default function Audio() {
  const [playingBE, setPlayingBE] = useState(false)
  const [playingD, setPlayingD] = useState(false)
  const [playingBIT, setPlayingBIT] = useState(false)

  const [audioProgress, setAudioProgress] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  const handleSongProgress = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(0)
      return
    }

    const newIntervalId = setInterval(() => {
      setAudioProgress((prev) => prev + 1)
    }, 1000)
    setIntervalId(newIntervalId)
  }

  const [song, setSong] = useState(brightEyed)

  const [play, { stop, duration }] = useSound(song)

  const setPlaying = [setPlayingBE, setPlayingBIT, setPlayingD]
  const playing = [playingBE, playingBIT, playingD]
  const player = [brightEyed, backInTime, drift]

  const totalSecondsOfSong = duration / 1000
  const percentageProgress = (audioProgress / totalSecondsOfSong) * 100

  const songProgress = {
    backgroundImage: `linear-gradient(90deg, rgba(206,249,136,1) 0%, rgba(206,249,136,1) ${Math.floor(
      percentageProgress
    )}%, rgba(255,255,255,1) ${
      Math.floor(percentageProgress) + 1
    }%, rgba(255,255,255,1) 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }

  return (
    <>
      <ScrollToTop />
      <h2 className="visually-hidden">Audio Engineer.</h2>
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
              <div className="playerControls">
                <PlayButton
                  onMouseDown={() => {
                    stop()
                    setSong(player[idx])
                    setAudioProgress(0)
                  }}
                  onClick={() => {
                    setPlaying.forEach((playingStatus) => {
                      playingStatus(false)
                    })
                    playing[idx] ? stop() : play()
                    setPlaying[idx](!playing[idx])
                    handleSongProgress()
                  }}
                >
                  <img
                    src={playing[idx] ? pauseButton : playButton}
                    alt="audio control play/pause"
                  />
                </PlayButton>
                <SongProgress
                  style={playing[idx] ? songProgress : { color: '#dbe0e0' }}
                >
                  {project.song}
                </SongProgress>
              </div>
            </article>
          )
        })}
      </StyledSection>
      <StyledSection>
        <h3>Why I do what I do.</h3>
        <p>
          I've always felt most comfortable in the place where art and science
          and technology converge. Whether it's Audio engineering, Picture
          Framing or Software Engineering, I enjoy discovering the the best way
          to make art tangible.
        </p>
      </StyledSection>
      <StyledSection>
        <h3>Contact me.</h3>
        <a href="mailto:daleinen@gmail.com">daleinen@gmail.com</a>
      </StyledSection>
    </>
  )
}
