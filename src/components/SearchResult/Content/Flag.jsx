import React from 'react'
import styled from 'styled-components'

const FlagImg = styled.img`
  margin-left: 2rem;
  width: calc(80% - 2rem)
`

export default function Flag(props) {
  const { flag } = props 
  return (
    <FlagImg src={flag}/>
  )
}
