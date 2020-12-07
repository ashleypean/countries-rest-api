import React, { useContext } from 'react'
import styled from 'styled-components'
import {MoonOutline} from '@styled-icons/evaicons-outline/MoonOutline'
import {Moon} from '@styled-icons/evaicons-solid/Moon'
import { useTheme, useThemeUpdate } from '../../utils/ThemeContext'
import { ThemeContext } from '../../App'

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 .5rem;
  background: ${props => props.darkMode? "white": "#2B3945"}
`

const Title = styled.h3`
  display: inline;
  font-weight: 650;
`

const DarkModeImage = styled.svg`
  width: 1.3rem;
  height: 1.3rem;
  display: inline;
  vertical-align: middle;
`

const DarkModeToggle = styled.p`
 font-size: 1rem;
`

export default function Header(props) {
  const darkMode = useTheme()
  const toggleDarkMode = useThemeUpdate()

  return (
    <HeaderDiv>
      <Title>Where in the world?</Title>
      {/* Dark mode icon and text will change when dark mode is toggled */}
      <DarkModeToggle onClick={toggleDarkMode}>
        <DarkModeImage> {darkMode? <Moon />: <MoonOutline />} </DarkModeImage>
        {darkMode? ' Light Mode': ' Dark Mode'}
      </DarkModeToggle>
    </HeaderDiv>
  )
}

