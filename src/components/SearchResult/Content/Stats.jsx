import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DarkModeContext } from '../../../utils/DarkModeHook'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.darkMode? "black": "white"}
`

const Div1 = styled.div`
  margin: 2rem; 
`

const Div2 = styled.div`
  margin: 0 2rem; 
`

const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 2rem;
`

const Text = styled.p`
  font-weight: 400;
`

const InlineSpan = styled.span`
  font-weight: 400;
`

const Span = styled.span`
  font-weight: 600;
`

const Div3 = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`

const Div3Title = styled.h3`
  width: 100%;
  margin: 1rem 0;
`

const Button = styled.button`
  width: 4.1rem;
  height: 1.6rem;
  padding: 0 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${props => props.darkMode? "#fafafa": "#2B3945"};
  color: ${props => props.darkMode? "black": "white"};

  @media screen and (min-width: 400px) {
    width: 4.8rem;
    height: 1.6rem;
  }

  @media screen and (min-width: 600px) {
    width: 5.5rem;
    height: 2rem;
  }
`

export default function Stats(props) {
  const { darkMode } = useContext(DarkModeContext)
  const history = useHistory()
  const {name, nativeName, population, region, subregion, capital, topDomain, currencies, languages, borderCountries} = props.searchResult

  const handleClick = (e) => {
    const countryCode = e.target.innerText
    history.push(`/search/${countryCode}`)
  }

  return (
    <Container darkMode={darkMode}>
      <Div1>
        <Title>{name}</Title>
        <Text>  
          <Span>Native Name: </Span> 
          {nativeName}
        </Text>
        <Text>  
          <Span>Population: </Span> 
          {population}
        </Text>
        <Text>  
          <Span>Region: </Span> 
          {region}
        </Text>
        <Text>  
          <Span>Sub Region: </Span> 
          {subregion}
        </Text>
        <Text>  
          <Span>Capital: </Span> 
          {capital}
        </Text>
      </Div1>

      <Div2>
        <Text>  
          <Span>Top Level Domain: </Span> 
          {topDomain}
        </Text>
        <Text>  
          <Span>Currencies: </Span> 
          {currencies}
        </Text>
        <Text>  
          <Span>Languages: </Span> 
          {languages.map((x, index) =>
          index !== languages.length-1? <InlineSpan key={index}>{x.name},&nbsp;</InlineSpan>: <InlineSpan key={index}>{x.name}</InlineSpan>
          )}
        </Text>

        <Div3>
          <Div3Title>Border Countries: </Div3Title>
          {borderCountries.map((country, index) => <Button key={index} darkMode={darkMode} onClick={handleClick}>{country}</Button>)}
        </Div3>
      </Div2>
        

      
    </Container>
  )
}
