import styled, { css } from 'styled-components'

const ProjectContainer = styled.article`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 8rem;

  .info {
    margin: 0 0 0 3.75rem;
  }

  h2 {
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 2.25rem;
    margin: 1.5rem 0 0.75rem 0;
  }

  a {
    font-size: 2.25rem;
  }

  img {
    border: 1px solid var(--green);
  }
  // if project is an odd number have image on left
  ${(props) =>
    props.idx % 2 &&
    css`
      flex-direction: row;

      .info {
        margin: 0 3.75rem 0 0;
      }

      h2 {
        text-align: right;
      }
      p {
        text-align: right;
      }
      a {
        display: block;
        text-align: right;
      }
    `}
`
export default function Project({ title, description, idx }) {
  return (
    <ProjectContainer idx={idx}>
      <div className="info">
        <h2>{title}</h2>
        <p className="green">{description}</p>
        <a href={'github.com'} className="green">
          {' '}
          Check it out &rarr;
        </a>
      </div>

      <img src="https://picsum.photos/440/380" alt={title} />
    </ProjectContainer>
  )
}
