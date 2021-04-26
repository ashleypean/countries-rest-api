import React, { useContext } from 'react'
import styled from 'styled-components'
import { Search } from '@styled-icons/evaicons-solid/Search'
import { DarkModeContext } from '../../../utils/DarkModeHook'

const Form = styled.form`
  margin: 1rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.darkMode? "#fafafa": "#2B3945"};
`

const Input = styled.input`
  width: calc(90% - 2rem);
  height: 100%;
  padding: 0 1rem;
  border: none;
  outline: none;
  display: inline;
  color: ${props => props.darkMode? "black": "#fafafa"};
  background: transparent;
`

const Image = styled(Search)`
  width: 3%;
  min-width: 15px;
  max-width: 20px;
  height: 100%;
  display: inline;
  vertical-align: middle;
  padding: 0 0 0 1rem;
  color: ${props => props.darkMode? "black": "#fafafa"};
  background: transparent;
`

export default function SearchBar(props) {
  const { darkMode } = useContext(DarkModeContext)
  const { setCountryList, permCountryList } = props

  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase()
    setCountryList(permCountryList.filter(country => country.name.toLowerCase().includes(userInput)))
  }

  return (
    <Form darkMode={darkMode}>
      <Image darkMode={darkMode} />
      <Input type="text" placeholder="Search for a country..." onChange={handleChange}/>
    </Form>
  )
}