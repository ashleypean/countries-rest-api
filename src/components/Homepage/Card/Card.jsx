import React, {  useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DarkModeContext } from '../../../utils/DarkModeHook'

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 0 0;
  color: ${props => props.darkMode? "black": "white"}
`

const CardContainer = styled.div`
  display: inline;
  background: ${props => props.darkMode? "white": "#2B3945"};
  width: calc(100% - 4rem);
  max-width: 500px;
  margin: 1rem 2rem;
  height: 25rem;
  cursor: pointer;

  @media (min-width: 400px) {
    height: 24rem;
    
  }

  @media (min-width: 600px) {
    height: 30rem;
    width: calc(50% - 4rem);
  }

  @media (min-width: 1000px) {
    width: 20%;
    height: auto;
    margin: 2rem 1rem;
  }
`

const Flag = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;

  @media (min-width: 400px) {
    height: 50%;
  }  

  @media (min-width: 600px) {
    height: 55%;
  }

  @media (min-width: 1000px) {
    height: 50%;
  }
`

const CountryName = styled.h4`
  font-weight: 600;
  margin-left: 1rem;

  @media (min-width: 1000px) {
    font-size: .8rem;
    margin: .5rem 0 1rem 1rem;
  }
`

const Text = styled.p`
  font-weight: 400;
  margin-left: 1rem;

  @media (min-width: 1000px) {
    font-size: .8rem;
    margin: 0 0 .2rem 1rem;
  }
`

const Span = styled.span`
  font-weight: 600;
  text-transform: capitalize;
`

export default function Card(props) {
  const history = useHistory()
  const { darkMode } = useContext(DarkModeContext)
  const {countryList} = props

  const statCategories = ['population', 'region', 'capital']

  //On click of card, link user to search results for that country
  const handleClick = (e) => {
    const divName = e.target.parentElement.getAttribute('name')
    history.push(`/search/${divName}`)
  }

  return (
    <MainContainer darkMode={darkMode}>
      {countryList.map((country, index) => (
        <CardContainer darkMode={darkMode} key={index} onClick={handleClick} name={country.name}>

        {/* Add lazy loading for cards not on page, eager for the first three cards*/}
        {index <=2? <Flag src={country.flag} name={country.name}loading="eager"/>: <Flag src={country.flag} loading="lazy"/>}

        <CountryName>{country.name}</CountryName>

        {/* Generate stats dynamically with map function; stats on line 69*/}
        {statCategories.map((category, index) => (
          <Text key={index}>
            <Span>{category + ': '}</Span>
            {country[category]}
          </Text>
          ))}          
        </CardContainer>
      ))}
    </MainContainer>
  )
}
