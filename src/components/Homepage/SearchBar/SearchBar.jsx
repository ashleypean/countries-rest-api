import React, { useContext } from 'react'
import styled from 'styled-components'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import { DarkModeContext } from '../../../utils/DarkModeHook'

const Form = styled.form`
  margin: 1rem;
  height: 3rem;
`

const Input = styled.input`
  width: calc(100% - 2rem);
  height: 100%;
  padding: 0 1rem;
  border: none;
  background-color: ${props => props.darkMode? "white": "#2B3945"};
`

export default function Search() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Form>
      <Input type="text" placeholder="Search for a country..." darkMode={darkMode}/>
    </Form>
  )
}
