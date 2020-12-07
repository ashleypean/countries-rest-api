import React from 'react'
import './Homepage.css'
import Header from '../Header/Header'
import Filter from './Filter/Filter'
import SearchBar from './SearchBar/SearchBar'
import Card from './Card/Card'
import Footer from '../Footer/Footer'

export default function Homepage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Filter />
      <Card />
      <Footer />
    </div>
  )
}
