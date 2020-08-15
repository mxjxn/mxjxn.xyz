import React from 'react'
import styled from 'styled-components'
import { FireH3 } from '../Fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rainbowShadow } from '../../GlobalStyle'

const ExampleDiv = styled.div`
  border-radius: 2em;
  padding: 1rem 3.5rem;
  @media screen and (max-width:768px){
    padding: 0 0.5em;
  }

`
const ExampleFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: space-between;
.svg-inline--fa {
  padding-right: 1rem;
}
align-items:center;
`

const Item = styled.div`
  font-size:0.77rem;
  background: linear-gradient(35deg, #444 0%, #222 100%);
  animation: ${ rainbowShadow } 5s linear infinite;
  padding: 0.2rem 0.3rem;
line-height:1.3rem;
  margin: 0.35em;
  border-radius: 9px;
  color:white;
  transition: color 800ms linear ease-in-out;
  &:hover {
    color: red;
  }
`

const H3 = ({children, ...props}) => (
  <FireH3
    margin="0.5rem 0 0.5rem -2.4rem"
    {...props}>
      {children}
  </FireH3>
)

const Examples = ({className}) => {
  return (
    <ExampleDiv className={className}>
      <ExampleFlex>
      <FireH3 >
      <FontAwesomeIcon icon="hammer" />
      Front-end Development
    </FireH3>
        <Item>ES6 Javascript</Item>
        <Item>React</Item>
        <Item>redux</Item>
        <Item>graphql</Item>
        <Item>css</Item>
        <Item>Typescript</Item>
        <Item>Clojurescript</Item>
      </ExampleFlex>
      <ExampleFlex>
        <FireH3>
          <FontAwesomeIcon icon="hammer" />
          Server-side development</FireH3>
        <Item>Luminus for Clojure</Item>
        <Item>Macchiato for CLJS on Nodejs</Item>
        <Item>Express.js</Item>
        <Item>Hapi.js</Item>
      </ExampleFlex>
      <ExampleFlex>
        <FireH3>
          <FontAwesomeIcon icon="hammer" />
          Database development</FireH3>
        <Item>PostgreSQL</Item>
        <Item>MongoDB</Item>
        <Item>Redis</Item>
        <Item>CruxDB</Item>
      </ExampleFlex>
      <ExampleFlex>
        <FireH3>
          <FontAwesomeIcon icon="hammer" />
          Dapps, DAOs and DeFi</FireH3>
        <Item>Web3.js</Item>
        <Item>Dharma Protocol</Item>
        <Item>DAOs and AragonOS</Item>
        <Item>IPFS</Item>
        <Item>Solidity</Item>
      </ExampleFlex>
    </ExampleDiv>
  )
}

export default Examples
