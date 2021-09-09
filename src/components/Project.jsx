export default function Project({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <p>
        {description} <span> Check it out &rarr;</span>{' '}
      </p>

      <img src="https://picsum.photos/300/200" alt={title} />
    </>
  )
}
