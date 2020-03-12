import React from 'react'
import styled from 'styled-components'

const FancyLine = styled.div`
  font-family: ${ ({ theme: { fonts } }) => fonts.baseFamily };
  background-image: linear-gradient(90deg, rgba(190,16,16,1) 0%, rgba(242,20,20,1) 16%, rgba(241,163,20,1) 39%, rgba(241,227,20,1) 46%, rgba(241,172,20,1) 57%, rgba(240,20,20,1) 77%, rgba(190,16,16,1) 100%);
  height:0.1rem;
min-height:1px;
  margin:0.5em 0;
  background-size: 200% auto;
  animation: ${ anim } 5s linear infinite;
`

export default FancyLine;
