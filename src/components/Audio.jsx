import AudioExamples from './AudioExamples.jsx'
import styled from 'styled-components'

const audioProjects = [
  {
    artist: 'Muh',
    description:
      'I was given a project with raw recordings and I mixed and mastered the album over the course of 2 months.',
    audio: '',
  },
  { artist: 'Indigo', description: 'Mastered in a single day.', audio: '' },
  {
    artist: 'Low Swans',
    description:
      "I've known Jon from Low Swans for a while and it was fun to work with him on Post.",
    audio: '',
  },
]

const StyledSection = styled.section`
  text-align: left;
  width: 100%;

  ul,
  h3,
  h4 {
    font-family: 'Roboto slab', serif;
    font-size: 4rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    color: white;
  }

  h4 {
    margin: 0;
  }

  p {
    font-size: 2.25rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: var(--pale-green);
  }
`

export default function Audio() {
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
            </article>
          )
        })}
      </StyledSection>
      <StyledSection>
        <h3>Why I do what I do</h3>
        <p>
          Waking up is agony. Sleeping in is pain. Conciousness is still a young
          man's game.
        </p>
      </StyledSection>
    </>
  )
}
