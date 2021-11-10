import React from 'react'
import styled, { css } from 'styled-components'
const ProjectContainer = styled.article`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .mobile {
    display: none;
  }

  @media screen and (max-width: 968px) {
    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }

  .info {
    margin: 0 0 0 3.75rem;

    @media (max-width: 1124px) {
      margin: 0 0 0 1rem;
    }
    @media (max-width: 968px) {
      margin: 0;
    }
  }

  h4 {
    font-size: 3.5rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1.5rem 0 0.75rem 0;
    color: var(--pale-green);
  }

  a.check-it-out {
    font-size: 2.25rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0 2px;
    border-bottom: 1px solid var(--pale-green);
    &:hover {
      font-style: italic;
    }
  }

  a.git {
    font-size: 4rem;
    color: white;
    &:hover {
      color: var(--pale-green);
    }
  }

  img {
    border: 4px solid var(--green);
    width: 440px;
    @media (max-width: 968px) {
      width: 70%;
    }
    @media (max-width: 660px) {
      width: 100%;
    }
  }

  // if project is an odd number have image on left
  ${(props) =>
    props.idx % 2 &&
    css`
      @media (min-width: 968px) {
        flex-direction: row;

        .info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin: 0 3.75rem 0 0;
          @media (max-width: 1124px) {
            margin: 0 1rem 0 0;
          }
          @media (max-width: 968px) {
            margin: 0;
          }
        }
        p {
          text-align: right;
        }
        a {
          display: block;
          text-align: right;
        }
      }
    `}
`
export default function Project({ title, description, gitLink, idx, img, site }) {
  const Image = (props) => (
    <img
      src={img}
      className={props.mobile ? 'mobile' : 'desktop'}
      alt={title}
    />
  )

  return (
    <ProjectContainer idx={idx}>
      <div className="info">
        <h4>{title}</h4>
        <Image mobile={true} />
        <p className="green">{description}</p>
        <a
          href={site}
          className="green check-it-out"
          target="_blanks"
          rel="noopener noreferrer"
        >
          {' '}
          Check it out &rarr;
        </a>
      </div>
      <Image mobile={false} />
    </ProjectContainer>
  )
}
