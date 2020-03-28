import React from 'react'
import styled from 'styled-components'
import { FireH3 } from '../Fire'

const ExampleDiv = styled.div`
  padding: 1rem 3.5rem;
`
const ExampleFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  background: linear-gradient(35deg, #444 0%, #222 100%);
  min-width: 10em;
  margin: 0.5em;
  padding: 0.75em;
  &:hover {
  transition: color 300ms linear ease-in-out;
    color: red;
  }
`

const Examples = ({className}) => {
  return (
    <ExampleDiv className={className}>
      <FireH3>
      I'm experienced with front-end
      </FireH3>
      <ExampleFlex>
        <Item>JS</Item>
        <Item>Modern CSS practices</Item>
        <Item>CLJS for web-apps</Item>
        <Item>React</Item>
        <Item>Redux</Item>
        <Item>Svelte</Item>
        <Item>Web3.js</Item>
      </ExampleFlex>
      <FireH3> I'm experienced with back-end </FireH3>
      <ExampleFlex>
        <Item>Node.js</Item>
        <Item>Clojure</Item>
        <Item>API development</Item>
        <Item>GraphQL</Item>
      </ExampleFlex>
      <FireH3>I've worked with databases</FireH3>
      <ExampleFlex>
        <Item>PostgreSQL</Item>
        <Item>MongoDB</Item>
        <Item>Redis</Item>
        <Item>Datomic and Datalog</Item>
        <Item>CruxDB</Item>
        <Item>RocksDB</Item>
      </ExampleFlex>
      <FireH3>And Decentralized Tech</FireH3>
      <ExampleFlex>
        <Item>Ethereum</Item>
        <Item>Bitcoin</Item>
        <Item>Dharma Protocol</Item>
        <Item>DAOs and AragonOS</Item>
        <Item>IPFS</Item>
        <Item>Solidity Smart Contracts</Item>
      </ExampleFlex>
      <FireH3>I reach into new territory all the time</FireH3>
      <ExampleFlex>
        <Item>3d modeling</Item>
        <Item>Unity Game Dev</Item>
        <Item>Dart and Flutter native app development</Item>
        <Item>Sound Design and Composition</Item>
        <Item>Blackletter Calligraphy!</Item>
      </ExampleFlex>
    </ExampleDiv>
  )
}

export default Examples
