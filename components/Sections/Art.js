import React from 'react'
import styled from 'styled-components'
import {
  Grid, Left, LeftThird, Right, RightTwoThird, RedBox,
  FlexWrap, CornerBox, DarkBox
} from '../Containers'
import { PinkFireH2, AltFireH2 } from '../FireHeader'


const NFTSection = () => {
    return (
      <RedBox roundTop>
        <Grid>
          <LeftThird>
            <PinkFireH2>
              Digital Artist &
              <br/> Abstract Calligrapher.
            </PinkFireH2>
          </LeftThird>
          <RightTwoThird>
            <DarkBox>
              <p>My art is an exploration of the abstract, and the intersection of the digital and the physical.</p>
              <p>
                I began my art journey in 2018 with the simple practice of broad pen calligraphy. Practicing led to experiments in abstract calligraphy.
                I fell in love with the process of creating abstract calligraphy, and began to explore the format of creating circular abstracts.
                Today, my art explores the abstract, and the intersection of the digital and the physical.
              </p>
              <p>
                Over the years, I've explored a variety of mediums, from pen and brush calligraphy to digital art, 3d modeling, AI and generative art.
              </p>
            </DarkBox>
          </RightTwoThird>
        </Grid>
          <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>
      </RedBox>
    )
}

export { NFTSection }
