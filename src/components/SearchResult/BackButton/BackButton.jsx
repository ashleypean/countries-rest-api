import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DarkModeContext } from '../../../utils/DarkModeHook'

const Button = styled.button`
  display: block;
  outline: none;
  border: none;
  padding: .8rem 1.3rem;
  margin: 2rem;
  background: ${props => props.darkMode? "#fafafa": "#2B3945"};
  color: ${props => props.darkMode? "black": "white"};
`

export default function BackButton() {
  const history = useHistory()
  const { darkMode } = useContext(DarkModeContext)

  const handleClick = () => {
    history.push("/")
  }

  return (
    <Button onClick={handleClick} darkMode={darkMode}>
      &larr; &nbsp; Back
    </Button>
  )
}
