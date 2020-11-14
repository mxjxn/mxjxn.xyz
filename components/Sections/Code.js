import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  Grid, LeftThird, RightTwoThird,
  BlueBox, DarkBox
} from '../Containers'
import { FireH1 } from '../FireHeader'
import { Item } from '../Elements'




const CodeSection = () => {
  return (
    <BlueBox roundTop>
      <Grid>
        <LeftThird>
          <FireH1>Constantly compelled to create with code.</FireH1>
        </LeftThird>
        <RightTwoThird>
          <DarkBox>
            <p>
              I am a front end web-developer working in Javascript, Clojure(script), and Solidity.
            </p>
            <p>
              I like to do work in ...
              <Item href="https://github.com/mxjxn/mxjxn.xyz">React</Item>
              <Item href="https://gitlab.com/mxjxn/movitoken-relayer">Web3</Item>
              <Item href="https://gitlab.com/movitoken/tokenswap">Solidity</Item>
              <Item href="https://gitlab.com/mxjxn/gtd-app">Re-frame</Item>
            </p>
            <p>Here is
              <Item href="https://github.com/mxjxn">My Github</Item>
              and
              <Item href="https://gitlab.com/mxjxn">My Gitlab</Item>
            </p>
          </DarkBox>
        </RightTwoThird>
      </Grid>
    </BlueBox>
  )

}

export { CodeSection }
