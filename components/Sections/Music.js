import React from 'react'
import styled from 'styled-components'

import { FireH1 } from '../FireHeader'
import {
  Grid, LeftThird, RightTwoThird,
  TealBox, DarkBox, CornerBox,
  FlexWrap
} from '../Containers'

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
                  I write synthesizer music.
                  All of my music is available for free on <a href="https://soundcloud.com/mxjxn">Soundcloud</a>.
                </p>
            </DarkBox>
            </RightTwoThird>
          </Grid>
          <CornerBox>
            <FlexWrap>
              <div>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/582525864&color=%238a7169&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"> </iframe>
                <div ><a href="https://soundcloud.com/mxjxn" title="MXJXN" target="_blank" >MXJXN</a> · <a href="https://soundcloud.com/mxjxn/death-reversed" title="Death Reversed" target="_blank">Death Reversed</a></div>
              </div>
              <div>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/399307173&color=%238a7169&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div><a href="https://soundcloud.com/mxjxn" title="MXJXN" target="_blank" >MXJXN</a> · <a href="https://soundcloud.com/mxjxn/rpm2018-spicy-peanut-broccoli-noodles" title="RPM2018 - Spicy Peanut Broccoli + Noodles" target="_blank" >RPM2018 - Spicy Peanut Broccoli + Noodles</a></div>
              </div>
              <div>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/347388745&color=%238a7169&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div ><a href="https://soundcloud.com/mxjxn" title="MXJXN" target="_blank" >MXJXN</a> · <a href="https://soundcloud.com/mxjxn/unfinished-business" title="Unfinished Business" target="_blank" >Unfinished Business</a></div>
              </div>
            </FlexWrap>
          </CornerBox>
        </TealBox>
    )
}

export { MusicSection }
