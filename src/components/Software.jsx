import Project from './Project'

const projects = [
  {
    title: 'Candy Fluffs',
    description:
      'My client needed an affordable, quick, and easy solution. Gatsby and Jamstack delivered on all counts and more.',
  },
  {
    title: 'Bearcabulary',
    description:
      'Originally built in a 3 day hack-a-thon, some of the team re-imagined the project in Gatsby and NetlifyCMS to be open source and extensible.',
  },
  {
    title: 'Weird Radio',
    description:
      'Internet radio designed promoting experimental music from the West Coast.',
  },
]

export default function Software() {
  return (
    <>
      <section>
        <h2 className="visually-hidden">Projects</h2>
        <ul>
          {projects.map((project) => {
            return (
              <li>
                <Project
                  title={project.title}
                  description={project.description}
                />
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <h2 className="green">Development Tools.</h2>
      </section>
      <section>
        <h2 className={'vissually-hidden'}>About Me.</h2>
        <p>
          I am a software engineer with an obsession to meld the rigid logic of
          programming and the boundless possibilities of art and ideas. I love
          how form and function combine to improve our lives to make information
          and tools clearer and more accessible. I love the process of turning
          the intangible into reality through technology.
        </p>
      </section>
    </>
  )
}
