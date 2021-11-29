import React from 'react'
import Project from './Project'
import styled from 'styled-components'
import ScrollToTop from './ScrollToTop'
import Skill from './Skill'

import {
  DiGithubBadge,
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejsSmall,
  DiNpm,
  DiPostgresql,
  DiSass,
  DiReact,
} from 'react-icons/di'

import { IoAccessibilitySharp } from 'react-icons/io5'

import { GrGatsbyjs } from 'react-icons/gr'

import candyFluffs from '../static/candyFluffs.png'
import bearcabulary from '../static/bearcabulary.png'
import weirdRadio from '../static/weirdRadio.png'

// import { SiNextDotJs, SiNetlify } from 'react-icons/si'
import resume from '../static/Doug_Leinen-Resume.pdf'

const StyledProjectsSection = styled.section`
  h3 {
    margin: 0 0 1rem 0;

    @media (max-width: 968px) {
      text-align: left;
      margin: 70px 0 0;
    }
  }

  @media (max-width: 968px) {
    width: 100%;
  }
`

const StyledProjectsList = styled.ul`
  margin-top: 190px;
  list-style-type: none;
  padding: 20px 0;

  li {
    &:not(:last-child) {
      margin-bottom: 15rem;
    }
  }

  @media (max-width: 1124px) {
    padding: 20px 10px;
  }

  @media (max-width: 968px) {
    margin-top: 0;
    li {
      &:not(:last-child) {
        margin-bottom: 4rem;
      }
    }
  }
`

const StyledTools = styled.section`
  color: white;
  margin: 4rem;

  @media (max-width: 968px) {
    margin: 0;
  }

  h2,
  h3 {
    text-align: center;
    margin: 20px 0;
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
    @media (max-width: 968px) {
      width: 30rem;
    }
    @media (max-width: 550px) {
      width: 20rem;
      height: 20rem;
    }
  }
  li {
    font-size: 5rem;
    padding: 0.4rem 1.2rem;
    @media (max-width: 968px) {
      font-size: 5rem;
      padding: 0;
    }
  }
`

const StyledAbout = styled.section`
  margin: 660px 0 4rem;
  padding: 0 2rem;

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 968px) {
    margin: 4rem 0;
  }
`

const StyledLinksList = styled.ul`
  margin: 4rem 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  a {
    font-size: 2.25rem;
    font-weight: 500;
    color: var(--pale-green);
    margin: 2rem 0;
    padding: 0 2px;
    border-bottom: 1px solid var(--pale-green);

    &:hover {
      color: var(--green);
      font-style: italic;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;

    li {
      margin: 1rem auto;
    }
  }
`

const projects = [
  {
    title: 'Candy Fluffs',
    site: 'https://candyfluffs.com',
    gitLink: 'https://github.com/daleinen7/candyfluffs',
    description:
      'My client needed an affordable, quick, and easy solution. Gatsby and Jamstack delivered on all counts and more.',
    img: candyFluffs,
  },
  {
    title: 'Bearcabulary',
    site: 'https://bearcabulary.com',
    gitLink: 'https://github.com/daleinen7/bearcabulary',
    description:
      'Originally built in a 3 day hack-a-thon, some of the team re-imagined the project in Gatsby and NetlifyCMS to be open source and extensible.',
    img: bearcabulary,
  },
  {
    title: 'Weird Radio',
    site: 'https://weirdradio.netlify.app',
    gitLink: 'https://github.com/daleinen7/weird-radio',
    description:
      'An internet radio station promoting experimental music from the West Coast. A project where I have full control of the tech side and collaborate with two designers to bring the product to reality. Currently a work in progress.',
    img: weirdRadio,
  },
]

const skills = [
  {
    skill: <DiGithubBadge />,
    title: 'GitHub',
    description: "I frequently troubleshoot students' GitHub woes.",
  },
  {
    skill: <DiHtml5 />,
    title: 'HTML',
    description: 'I believe semantic markup is important.',
  },
  {
    skill: <DiReact />,
    title: 'React',
    description: 'In fact, this site is built in React!',
  },
  {
    skill: <DiJsBadge />,
    title: 'JavaScript',
    description: "It's important to know the fundamentals.",
  },
  {
    skill: <DiMongodb />,
    title: 'MongoDB',
    description: 'Non-Relational database. I also use Mongoose.',
  },
  {
    skill: <DiCss3 />,
    title: 'CSS',
    description: 'I have 10 years of experience with CSS.',
  },
  {
    skill: <DiNodejsSmall />,
    title: 'NodeJS',
    description:
      'Javascript on the server side. Most of my experience is through Express.',
  },
  {
    skill: <DiNpm />,
    title: 'NPM',
    description: 'Node Package Manager. A package manager I use.',
  },
  {
    skill: <DiPostgresql />,
    title: 'PostgreSQL',
    description: 'Relational database. I enjoy writing ERDs for databases.',
  },
  {
    skill: <DiSass />,
    title: 'SASS',
    description: 'These days I use SASS more often than vanilla CSS.',
  },
  {
    skill: <IoAccessibilitySharp />,
    title: 'A11y or Accessibility',
    description:
      'I feel very strongly that the web should be accessible to everyone.',
  },
  {
    skill: <GrGatsbyjs />,
    title: 'GatsbyJS',
    description:
      'Static Site Generator built on React. Most of my production level projects have been built with Gatsby.',
  },
].map((skill, idx, arr) => {
  return (
    <Skill
      skill={skill.skill}
      title={skill.title}
      description={skill.description}
      top={idx < arr.length / 2}
      key={idx}
    />
  )
})

export default function Software() {
  return (
    <>
      <ScrollToTop />
      <h2 className="visually-hidden">Software Engineer.</h2>
      <StyledProjectsSection>
        <StyledProjectsList>
          {projects.map((project, idx) => {
            return (
              <li key={project.title}>
                <Project
                  title={project.title}
                  description={project.description}
                  gitLink={project.gitLink}
                  idx={idx}
                  site={project.site}
                  img={project.img}
                />
              </li>
            )
          })}
        </StyledProjectsList>
      </StyledProjectsSection>
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
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://github.com/daleinen7"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/doug-leinen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </StyledLinksList>
    </>
  )
}
