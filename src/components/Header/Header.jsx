import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {Moon} from '@styled-icons/evaicons-solid/Moon'
import {Sun} from '@styled-icons/evaicons-solid/Sun'
import { DarkModeContext } from '../../utils/DarkModeHook'

//Update background color and font color based on darkMode Context
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem .8rem;
  align-items: center;
  background-color: ${props => props.darkMode? "white": "#2B3945"}; 
  color: ${props => props.darkMode? "black": "white"};

  @media screen and (min-width: 400px) {
    padding: 1.4rem 1rem;
  }
`

const Title = styled.h3`
  display: inline;
  font-weight: 600;
  font-size: .9rem;
  cursor: pointer;
  margin: 0;
`

const DarkModeImage = styled.svg`
  width: 1.3rem;
  height: 1.3rem;
  display: inline;
  vertical-align: middle;
`

const DarkModeToggle = styled.p`
 font-size: 1rem;
 cursor: pointer;
 align-self: flex-start;
 font-size: .75rem;
 margin: 0;
 color: ${props => props.darkMode? "blue": "yellow"}
`

export default function Header(props) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <HeaderDiv darkMode={darkMode}>
      <Title onClick={handleClick}>Where in the world?</Title>
      {/* Dark mode icon and text will change when dark mode is toggled */}
      <DarkModeToggle onClick={toggleDarkMode} darkMode={darkMode}>
        <DarkModeImage> {darkMode? <Moon />: <Sun />} </DarkModeImage>
        {darkMode? '  Dark Mode': ' Light Mode'}
      </DarkModeToggle>
    </HeaderDiv>
  )
}

