import React from 'react'
import styled, { keyframes } from 'styled-components'

const loadingAnim = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`

const LoadingPage = styled.div`
  font-family: 'Stalinist One';
  postion:relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 2em;
  text-align:center;
  background: rgb(0,0,0);
  background-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(46,20,20,1) 45%, rgba(242,20,20,1) 51%, rgba(73,31,31,1) 57%, rgba(4,15,17,1) 100%);
  background-size: 200% auto;
  animation: ${ loadingAnim } 1s ease-in-out reverse infinite;
  .threedee {
    text-shadow: 1px 1px #fe4902,
            2px 2px #fe4902,
            3px 3px #fe4902;
  }
  h1 {
    font-size: 5em;
    letter-spacing: 0.1em;
    color: #111;
  }
`

export { LoadingPage }
