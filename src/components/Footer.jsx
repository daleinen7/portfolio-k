import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 4rem 1rem 1rem 0.5rem;
  width: 100%;
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: right;
  font-family: 'Roboto', sans-serif;
  a {
    color: white;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      &copy; <i>Doug Leinen.</i> Site designed by{' '}
      <a href="https://knds.art/">
        <i>Kaung Shein</i>.
      </a>{' '}
    </StyledFooter>
  )
}
