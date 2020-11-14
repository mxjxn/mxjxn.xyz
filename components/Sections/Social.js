import React from 'react'
import styled from 'styled-components'

import {
  Grid, LeftThird, RightTwoThird,
  PurpleBox, DarkBox,
  Flex
} from '../Containers'
import { AltFireH2 } from '../FireHeader'
import { Item } from '../Elements'

const H2 = styled(AltFireH2)`
  display:inline-block;
  margin:0;
`

const SocialDiv = styled(PurpleBox)`
  margin-bottom: 1em;
  ${ Item } {
    box-shadow:0;
  }
`

const SocialSection = () => {
    return (
        <SocialDiv narrow>
          <Grid>
            <LeftThird>
                  <H2>Follow me on ...</H2>
            </LeftThird>
            <RightTwoThird>
              <Flex>
                <Item href="https://twitter.com/twitter">Twitter</Item>
                <Item href="https://instagram.com/fastaction">Instagram</Item>
                <Item href="https://app.rarible.com/fastaction">Rarible</Item>
                <Item href="https://soundcloud.com/mxjxn">Soundcloud</Item>
              </Flex>
            </RightTwoThird>
          </Grid>
        </SocialDiv>
    )
}

export { SocialSection }
