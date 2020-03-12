import React from 'react'
import styled from 'styled-components'

const MXBio = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 1.5em 3.5em;
  min-height:60vh;
`

const Left = styled.div`
  margin-left:1em;
`
const Right = styled.div`
  margin-right:1em;
`

const Bio = () => {
  return (
    <MXBio>
      <Left>My Bio Section</Left>
      <Right>My Bio Section</Right>
    </MXBio>
  )

}

export default Bio
