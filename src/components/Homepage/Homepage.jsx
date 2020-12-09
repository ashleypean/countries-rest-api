import React, { useState, useEffect} from 'react'
import Header from '../Header/Header'
import Filter from './Filter/Filter'
import SearchBar from './SearchBar/SearchBar'
import Card from './Card/Card'
import axios from 'axios'

export default function Homepage() {
  const [countryList, setCountryList] = useState([{
    flag: '', 
    name: '', 
    population: 0, 
    region: '', 
    capital: '', 
  }])

  const [permCountryList, setPermCountryList] = useState([{
    flag: '', 
    name: '', 
    population: 0, 
    region: '', 
    capital: '', 
  }])

  //Fetch countries list from the third-party API
  useEffect(  () => {
    async function getData(){
      const res = await axios.get('https://restcountries.eu/rest/v2/all')

      let data = res.data

      setPermCountryList(
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

  //Updte the temporary countryList state when PermState changes
  useEffect( () => {  
    setCountryList(permCountryList)
  }, [permCountryList])

  return (
    <div>
      <Header />
      <SearchBar permCountryList={permCountryList} setCountryList={setCountryList}/>
      <Filter setPermCountryList={setPermCountryList}/>
      <Card countryList={countryList} />
    </div>
  )
}
