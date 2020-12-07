import React, { useContext } from 'react'
import styled from 'styled-components'
import { DarkModeContext } from '../../../utils/DarkModeHook'
import { CaretDown } from '@styled-icons/boxicons-regular/CaretDown'

const Dropdown = styled.div`
margin: 1rem 1rem 0;
width: 50%;
height: 20%;
padding: 1rem;
background: ${props => props.darkMode? "white": "#2B3945"};
color: ${props => props.darkMode? "black":"white"};
`

const DropdownList = styled.ul`
display: 'block';
margin: .25rem 1rem;
width: calc(50% + 2rem);
padding: 0;
background: ${props => props.darkMode? "white": "#2B3945"};
list-style: none;
z-index: 2;

&.hidden {
  display: none;
}
`

const DropdownListItem = styled.li`
color: ${props => props.darkMode? "black":"white"};
padding: .5rem 2rem;

&:hover {
  background: ${props => props.darkMode? "gray": "#202c37"}
}
`

export default function Filter() {
  const { darkMode } = useContext(DarkModeContext)
  const listItems = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  //Hide or show the filter dropdown on click
  const toggleDropdown = () => {
    const list = document.querySelector('ul')
    list.hidden? list.hidden = false: list.hidden = true
  }

  return (
    <>
      <Dropdown darkMode={darkMode} onClick={toggleDropdown}> Filter by Region </Dropdown>
      <DropdownList darkMode={darkMode} hidden={true}>
        {listItems.map((item, index) => (
          <DropdownListItem darkMode={darkMode} key={index}>{item}</DropdownListItem>
        ))}
      </DropdownList>
    </>
  )
}
