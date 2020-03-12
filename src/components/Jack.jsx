import React from 'react'
import styled from 'styled-components'

const JackDiv = styled.div`
padding: 2em ;
background-image: linear-gradient(10deg, #aa3333 0%, #aaaa33 100%);
`

const Jack = ({children, className}) => {
  return (
    <JackDiv className={className}>
      { children }
    </JackDiv>
  )
}

export default Jack
