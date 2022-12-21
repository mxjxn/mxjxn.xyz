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
    <BlueBox>
      <Grid>
        <LeftThird>
          <FireH1>Creative Web3 Developer</FireH1>
        </LeftThird>
        <RightTwoThird>
          <DarkBox>
            <p> I have been a web developer for over 10 years, and have been working with blockchain technology since 2016.  </p>
            <p>I am currently working as a Project Manager for <a href="https://charged.fi">Charged Particles</a>.</p>
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
