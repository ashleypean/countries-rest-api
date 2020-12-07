import React, { useContext } from 'react'
import styled from 'styled-components'
import { SuitHeartFill } from '@styled-icons/bootstrap/SuitHeartFill'
import { DarkModeContext } from '../../utils/DarkModeHook'

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: ${props => props.darkMode? 'black': 'white'};
  position: absolute; 
  bottom: 0;
  width: calc(100% - 2rem);
  margin: 2rem 0 0 0;
`

const Text = styled.p`
  font-size: .6rem;
`

export default function Footer() {
  const { darkMode } = useContext( DarkModeContext)
  return (
    <FooterDiv darkMode={darkMode}> 
      <Text>Built with &hearts; by Ashley Pean</Text>
      <Text>Challenge by FrontendMentor</Text>
    </FooterDiv>
  )
}
