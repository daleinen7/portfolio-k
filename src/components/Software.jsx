import Project from './Project'
import styled from 'styled-components'

import {
  DiGithubBadge,
  DiCss3,
  // DiHeroku,
  // DiDjango,
  DiHtml5,
  DiJsBadge,
  // DiLinux,
  // DiMarkdown,
  DiMongodb,
  DiNodejsSmall,
  // DiMysql,
  DiNpm,
  // DiPython,
  // DiPhotoshop,
  // DiPhp,
  DiPostgresql,
  // DiRor,
  DiSass,
  DiReact,
} from 'react-icons/di'

import { IoAccessibilitySharp } from 'react-icons/io5'

import { GrGatsbyjs } from 'react-icons/gr'

import { SiNextDotJs, SiNetlify } from 'react-icons/si'

const StyledProjectsList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const StyledTools = styled.section`
  color: white;
  margin: 4rem;


  h2,
  h3 {
    text-align: center;
    margin: 2rem;
  }

  ul {
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-between;
    width: 45rem;
    height: 10rem;
  }
  li {
    font-size: 5rem;
    padding: 0.4rem 1.2rem;
  }
`

const StyledAbout = styled.section`
  margin: 4rem;
  p {
    font-size: 1.5rem;
  }
`

const StyledLinksList = styled.ul`
  margin: 4rem;
  list-style-type: none;
  display: flex;
  justify-content: center;

  a {
    font-size: 2.25rem;
    font-weight: 500;
    color: var(--pale-green);
    margin: 2rem 4rem;
    padding: 1rem;
    text-decoration: underline;
    &:hover {
      color: var(--green);
      font-style: italic;
    }
  }
`

const projects = [
  {
    title: 'Candy Fluffs',
    site: 'https://candyfluffs.com',
    description:
      'My client needed an affordable, quick, and easy solution. Gatsby and Jamstack delivered on all counts and more.',
  },
  {
    title: 'Bearcabulary',
    site: 'https://bearcabulary.com',
    description:
      'Originally built in a 3 day hack-a-thon, some of the team re-imagined the project in Gatsby and NetlifyCMS to be open source and extensible.',
  },
  {
    title: 'Weird Radio',
    site: 'https://weirdradio.netlify.app',
    description:
      'Internet radio designed promoting experimental music from the West Coast. A project where I have full control of the tech side and collaborate with two designers to bring the product to reality. Currently a work in progress.',
  },
]

const skills = [
  <DiGithubBadge />,
  <DiHtml5 />,
  <DiReact />,
  // <DiHeroku />,
  // <DiDjango />,
  <DiJsBadge />,
  // <DiLinux />,
  // <DiMarkdown />,
  <DiMongodb />,
  <DiCss3 />,
  <DiNodejsSmall />,
  // <DiMysql />,
  <DiNpm />,
  // <DiPython />,
  // <DiPhotoshop />,
  // <DiPhp />,
  <DiPostgresql />,
  // <DiRor />,
  <DiSass />,
  <IoAccessibilitySharp />,
  <GrGatsbyjs />,
  // <SiNextDotJs />,
  // <SiNetlify />,
].map((skill, idx) => <li key={idx}>{skill}</li>)

export default function Software() {
  return (
    <>
      <h2 className="visually-hidden">Software Engineer</h2>
      <section>
        <h3>Projects</h3>
        <StyledProjectsList>
          {projects.map((project, idx) => {
            return (
              <li key={project.title}>
                <Project
                  title={project.title}
                  description={project.description}
                  idx={idx}
                  site={project.site}
                />
              </li>
            )
          })}
        </StyledProjectsList>
      </section>
      <StyledTools>
        <h3 className="green">Development Tools.</h3>
        <ul>{skills}</ul>
      </StyledTools>
      <StyledAbout>
        <h3 className={'visually-hidden'}>About Me.</h3>
        <p className="green">
          I am a software engineer with an obsession to meld the rigid logic of
          programming and the boundless possibilities of art and ideas. I love
          how form and function combine to improve our lives to make information
          and tools clearer and more accessible. I love the process of turning
          the intangible into reality through technology.
        </p>
      </StyledAbout>

      <StyledLinksList>
        <li>
          <a href="https://www.dougleinen.com/Doug_Leinen-Resume.pdf">Resume</a>
        </li>
        <li>
          <a href="https://github.com/daleinen7">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/doug-leinen/">LinkedIn</a>
        </li>
      </StyledLinksList>
    </>
  )
}
