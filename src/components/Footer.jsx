import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 4rem 1rem;
  width: 100%;
  color: #adadad;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: right;
  font-family: 'Roboto', sans-serif;
  a {
    color: #adadad;
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
