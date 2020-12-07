import React, { useContext } from 'react'
import styled from 'styled-components'
import {MoonOutline} from '@styled-icons/evaicons-outline/MoonOutline'
import {Moon} from '@styled-icons/evaicons-solid/Moon'
import { DarkModeContext } from '../../utils/DarkModeHook'

//Update background color and font color based on darkMode Context
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 .5rem;
  background-color: ${props => props.darkMode? "white": "#2B3945"}; 
  color: ${props => props.darkMode? "black": "white"};
`

const Title = styled.h3`
  display: inline;
  font-weight: 600;
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
`

export default function Header(props) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  return (
    <HeaderDiv darkMode={darkMode}>
      <Title>Where in the world?</Title>
      {/* Dark mode icon and text will change when dark mode is toggled */}
      <DarkModeToggle onClick={toggleDarkMode} darkMode={darkMode}>
        <DarkModeImage> {darkMode? <Moon />: <MoonOutline />} </DarkModeImage>
        {darkMode? ' Light Mode': ' Dark Mode'}
      </DarkModeToggle>
    </HeaderDiv>
  )
}

