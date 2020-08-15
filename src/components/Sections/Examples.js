import React from 'react'
import styled from 'styled-components'
import { FireH3 } from '../Fire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExampleDiv = styled.div`
  padding: 1rem 3.5rem;
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
  background: linear-gradient(35deg, #444 0%, #222 100%);
  margin: 0.5em;
  padding: 0.05em 1em;
height: 2.2em;
  border-radius: 999px;
  color:white;
  transition: color 800ms linear ease-in-out;
  &:hover {
    color: red;
  }
`

const Examples = ({className}) => {
  return (
    <ExampleDiv className={className}>
      <ExampleFlex>
        <FireH3 display="inline">
          <FontAwesomeIcon icon="hammer" />
          Front-end Development
        </FireH3>
        <Item>ES6 Javascript</Item>
        <Item>React</Item>
        <Item>scss, emotion, styled</Item>
        <Item>Clojurescript</Item>
        <Item>Typescript</Item>
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
