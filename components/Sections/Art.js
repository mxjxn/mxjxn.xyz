import React from 'react'
import styled from 'styled-components'
import {
  Grid, Left, LeftThird, Right, RightTwoThird, RedBox,
  FlexWrap, CornerBox, DarkBox
} from '../Containers'
import { PinkFireH2, AltFireH2 } from '../FireHeader'


const NFTSection = () => {
    return (
      <RedBox>
        <Grid>
          <LeftThird>
            <PinkFireH2>
              Digital Artist &
              <br/> Abstract Calligrapher.
            </PinkFireH2>
          </LeftThird>
          <RightTwoThird>
            <DarkBox>
              <p>
                Motivated by the clean precision of <a href="https://en.wikipedia.org/wiki/Blackletter">Blackletter</a>, I began my journey into calligraphy.
                Armed with a pilot parallel pen and a sheaf of resume paper, I got to practicing.
                I quickly found I could sink countless hours into this practice, and found <a href="https://www.instagram.com/explore/tags/abstractcalligraphy/">endless inspiration</a> from artists on instagram.
              </p>
              <p>
                This year I started bridging my pen and paper work into <a href="https://blender.org/">Blender</a>.
                I'm currently challenging myself to #100DaysOfBlender to really bring my skills to a new level.
                Many of my works can be purchased as one-of-a-kind high-res files on rarible.
              </p>
            </DarkBox>
          </RightTwoThird>
        </Grid>
        <CornerBox colors="#cccccc">
          <AltFireH2 align="center">
            Mandala meditations for sale on <a href="https://app.rarible.com/fastaction">Rarible</a>.
          </AltFireH2>
          <FlexWrap>
            <nft-card
                vertical
              contractAddress="0x60f80121c31a0d46b5279700f9df786054aa5ee5"
              tokenId="65572"></nft-card>
            <nft-card
                vertical
              contractAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
              tokenId="76044"> </nft-card>
              <nft-card
                vertical
                contractAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
                tokenId="76678"> </nft-card>
              <nft-card
                vertical
                contractAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
                tokenId="69330"> </nft-card>
              <nft-card
                vertical
                contractAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
                tokenId="68539"> </nft-card>
              <nft-card
                vertical
                contractAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
                tokenId="67426"> </nft-card>
              <nft-card
                vertical
                contractAddress="0x60f80121c31a0d46b5279700f9df786054aa5ee5"
                tokenId="62038"> </nft-card>
              <nft-card
                vertical
                contractAddress="0x60f80121c31a0d46b5279700f9df786054aa5ee5"
                tokenId="62040"> </nft-card>
          </FlexWrap>
        </CornerBox>
          <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>
      </RedBox>
    )
}

export { NFTSection }
