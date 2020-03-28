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
  postion:fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  text-align:center;
  background: rgb(0,0,0);
  animation: ${ loadingAnim } 1s ease-in-out reverse infinite;
  .threedee {
    text-shadow: 1px 1px #090909,
            2px 2px #111,
            3px 3px #191919,
            4px 4px #222,
            5px 5px #292929,
            6px 6px #333;
  }
  h1 {
    font-size: 5em;
    letter-spacing: 0.1em;
    color: #111;
  }
`

export { LoadingPage }
