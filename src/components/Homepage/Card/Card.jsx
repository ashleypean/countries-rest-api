import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { DarkModeContext } from '../../../utils/DarkModeHook'

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const CardContainer = styled.div`
  display: inline;
  background: ${props => props.darkMode? "white": "#2B3945"};
  width: calc(100% - 4rem);
  max-width: 500px;
  margin: 1rem 2rem;
  height: 30rem;
  color: ${props => props.darkMode? "black": "white"}
`

const Flag = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`

const CountryName = styled.h4`
  font-weight: 600;
  margin-left: 1rem;
`

const Text = styled.p`
  font-weight: 400;
  margin-left: 1rem;
`

const Span = styled.span`
  font-weight: 600;
  
`

export default function Card() {
  const { darkMode } = useContext(DarkModeContext)
  const [countryList, setCountryList] = useState([{
    flag: '', 
    name: '', 
    population: 0, 
    region: '', 
    capital: ''
  }])

  //Fetch countries list from the third-party API
  useEffect(  () => {
    async function getData(){
      const res = await axios.get('https://restcountries.eu/rest/v2/all')

      let data = res.data
      console.log(data)

      setCountryList(
        data.map(country => {
          return {
          flag: country.flag, 
          name: country.name, 
          population: country.population.toLocaleString(), 
          region: country.region, 
          capital: country.capital
          }
        })
      )

    }
    getData()
  }, [])

  return (
    <MainContainer>

      {countryList.map((country, index) => {
        if(index <= 10) {
          return (
            <CardContainer darkMode={darkMode} key={index} >
              <Flag src={country.flag} loading="eager"/>
              <CountryName>{country.name}</CountryName>
              <Text>
                <Span >Population: </Span>
                {country.population}
              </Text>

              <Text>
                <Span>Region: </Span>
                {country.region}
              </Text>
      
              <Text>
              <Span>Capital: </Span>
              {country.capital}
              </Text>
          </CardContainer>
          )
        }else 
          return (
            <CardContainer darkMode={darkMode} key={index}>
              <Flag src={country.flag} loading="lazy"/>
              <CountryName>{country.name}</CountryName>
              <Text>
                <Span >Population: </Span>
                {country.population}
              </Text>

              <Text>
                <Span>Region: </Span>
                {country.region}
              </Text>
      
              <Text>
              <Span>Capital: </Span>
              {country.capital}
              </Text>
          </CardContainer>
        )
        
      })}
    </MainContainer>
  )
}
