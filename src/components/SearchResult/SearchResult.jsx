import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
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
    languages: ['', ''], 
    borderCountries: ['', '']
  })

  useEffect( () => {
    async function getData() {
      let res 
      let data
      //Full name searches
      if(country.length > 3) {
        res = await axios.get('https://restcountries.eu/rest/v2/name/' + country)
        //Log error message to console and redirect to 404 page
        .catch(err => {
          if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
          }else if(err.request) {
            console.log(err.request)
          }else {
            console.log('Error: ', err.message)
          }
          return window.location.href = "/404"
        })
        data = res.data[0]

      //Country code searches
      }else {
        res = await axios.get('https://restcountries.eu/rest/v2/alpha/' + country)
        //Log error message to console and redirect to 404 page
        .catch(err => {
          if(err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
          }else if(err.request) {
            console.log(err.request)
          }else {
            console.log('Error: ', err.message)
          }
          return window.location.href = "/404"
       })
        data = res.data
      }

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
    
  }, [country])

  return (
    <div>
      <Header />
      <Back />
      <Flag flag={searchResult.flag}/>
      <Stats searchResult={searchResult} />
    </div>
  )
}
