import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns:50% 50%;
`
const LeftColumn = styled.div`
  padding:0 1em 0 0;
`
const RightColumn = styled.div`
  padding:0 0 0 1em;
`
export { TwoColumnGrid, LeftColumn, RightColumn }
