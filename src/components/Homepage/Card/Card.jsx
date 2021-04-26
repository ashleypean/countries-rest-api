import React, {  useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
  max-width: 300px;
  margin: 1rem 2rem;
  height: auto;
  padding: 0 0 1rem 0;
  cursor: pointer;
  @media (min-width: 600px) {
    height: 24rem;
    width: calc(100% - 4rem);
  }
  @media (min-width: 700px) {
    width: calc(50% - 4rem);
  }
  @media (min-width: 1000px) {
    width: calc(33% - 4rem);
    padding: 0;
  }
  @media (min-width: 1200px) {
    width: calc(26% - 4rem);
    margin: 2rem 1rem;
  }
`

const Flag = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  @media (min-width: 400px) {
    height: 55%;
  }  
  @media (min-width: 1000px) {
    height: 50%;
  }
`

const CountryName = styled.h4`
  font-weight: 600;
  margin: 1rem 0 .75rem 1rem;
  @media (min-width: 400px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1000px) {
    margin: .5rem 0 1rem 1rem;
  }
`

const Text = styled.p`
  font-weight: 400;
  margin: 0 0 .7rem 1rem;
  font-size: 110%;
  @media (min-width: 400px) {
    font-size: 130%;
  }
`

const Span = styled.span`
  font-weight: 600;
  text-transform: capitalize;
`

export default function Card(props) {
  const history = useHistory()
  const { country } = useParams()
  const { darkMode } = useContext(DarkModeContext)
  const {countryList} = props

  const statCategories = ['population', 'region', 'capital']

  //On click of card, link user to search results for that country
  const handleClick = (e) => {
    const parentDiv = e.target.closest('div.contain')
    const divName = parentDiv.getAttribute('name')
    console.log(divName)
    history.push(`/search/${divName}`)
  }

  return (
    <MainContainer darkMode={darkMode}>
      {countryList.map((country, index) => (
        <CardContainer darkMode={darkMode} key={index} onClick={handleClick} name={country.name} className="contain">

        {/* Add lazy loading for cards not on page, eager for the first three cards*/}
        {index <=10? <Flag src={country.flag} loading="eager"/>: <Flag src={country.flag} loading="lazy"/>}

        <CountryName>{country.name}</CountryName>

        {/* Generate stats dynamically with map function; stats on line 69*/}
        {statCategories.map((category, index) => (
          <Text key={index} >
            <Span >{category + ': '}</Span>
            {country[category]}
          </Text>
          ))}          
        </CardContainer>
      ))}
    </MainContainer>
  )
}
