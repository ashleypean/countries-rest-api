import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import Back from './BackButton/BackButton'
import Flag from './Content/Flag'
import Stats from './Content/Stats'
import axios from 'axios'


export default function SearchResult() {
  const { country } = useParams()

  const [searchResult, setSearchResult] = useState({
    flag: '',
    name: '',
    nativeName: '', 
    population: 0, 
    region: '', 
    subregion: '', 
    capital: '', 
    topDomain: '', 
    currencies: '', 
    languages: '', 
    borderCountries: ['', '']
  })

  useEffect( () => {
    async function getData() {
      const res = await axios.get('https://restcountries.eu/rest/v2/name/' + country)

      const data = res.data

      setSearchResult({
        flag: data.flag,
        name: data.name,
        nativeName: data.nativeName, 
        population: data.population.toLocaleString(), 
        region: data.region, 
        subregion: data.subregion, 
        capital: data.capital, 
        topDomain: data.topLevelDomain, 
        currencies: data.currencies[0].code, 
        languages: data.languages, 
        borderCountries: data.borders        
      })
    }

    getData()
  }, [])

  return (
    <div>
      <Header />
      <Back flag={searchResult.flag}/>
      <Flag />
      <Stats />
    </div>
  )
}
