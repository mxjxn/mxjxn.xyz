import React from 'react'
import styled from 'styled-components'

import { FireH1 } from '../FireHeader'
import {
  Grid, LeftThird, RightTwoThird,
  TealBox, DarkBox, CornerBox,
  FlexWrap
} from '../Containers'

import { Item } from '../Elements'

const MusicSection = () => {
    return (
        <TealBox>
          <Grid>
            <LeftThird>
            <FireH1>I create unique electronic music</FireH1>
            </LeftThird>
            <RightTwoThird>
            <DarkBox>
                <p>
                  I write music on synthesizers and computers. I write music in <a href="https://renoise.com">Renoise</a> and <a href="http://supercollider.github.io">SuperCollider</a>.
                  All of my music is currently available for free on <Item href="https://soundcloud.com/mxjxn">Soundcloud</Item>.
                </p>
            </DarkBox>
            </RightTwoThird>
          </Grid>
        </TealBox>
    )
}

export { MusicSection }
