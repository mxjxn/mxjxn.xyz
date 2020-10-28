import React from 'react'
import styled from 'styled-components'
import { FireH3 } from '../Fire'
import { TwoColumnGrid, LeftColumn, RightColumn } from '../../containers/Grid'
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
margin-bottom: 2em;
`

const Item = styled.div`
  background: linear-gradient(to bottom, #333 0%, #090909 100%);
  margin: 0.5em;
  padding: 0.05em 0.5em;
  height: 2.2em;
  display: inline-block;
  border-radius: 999px;
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
      <TwoColumnGrid>
        <LeftColumn>
        <FireH3>
          <FontAwesomeIcon icon="hammer" />
          Front-end Development
        </FireH3>
          I used <Item>React</Item> with <Item>styled components</Item> to make <a href="https://github.com/mxjxn/mxjxn.xyz">this site</a>.
        <br/>
          <Item>Clojurescript</Item> with <Item>re-frame</Item>
          <FireH3>
            <FontAwesomeIcon icon="hammer" />
            Server-side development
          </FireH3>
            <Item>Luminus for Clojure</Item>
            <Item>Express.js for Node</Item>
            <Item>PostgreSQL</Item>
            <Item>MongoDB</Item>
            <Item>Redis</Item>
            <Item>Datomic/CruxDB</Item>
        </LeftColumn>
        <RightColumn>
          <FireH3>
            <FontAwesomeIcon icon="hammer" />
            Dapps, DAOs and DeFi
          </FireH3>
          Some tools I'm working with:
          <Item>Ethereum</Item>
          <Item>Solidity</Item>
          <Item>Buidler/Hardhat</Item>
          <Item>xDai chain</Item>
          <Item>Aragon</Item>
          <Item>IPFS</Item>
          <br/>
          I'm currently working on my personal projects in Solidity and Web3 to build tools for communities and marketplaces.
        </RightColumn>
      </TwoColumnGrid>
    </ExampleDiv>
  )
}

export default Examples
