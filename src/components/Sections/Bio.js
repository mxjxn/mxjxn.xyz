import React from 'react'
import styled from 'styled-components'
import MXBioContents from './BioContents.mdx'

const MXBio = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: linear-gradient(90deg, #000000 0%, #f55555 100%)
  p{
    font-size: 0.8em;
  }
`


const Bio = () => {
  return (
    <MXBio>
      <MXBioContents/>
    </MXBio>
  )

}

export default Bio
