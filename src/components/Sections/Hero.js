import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import Fade from 'react-reveal/Fade'
import Rotator from 'react-text-rotator'

const anim = keyframes`
  from { background-position: 0% 0; }
  to { background-position: 200% 0; }
`
const rainbowShadow = keyframes`
0%, 100% {
  box-shadow: .04em .04em .03em #ff0000,
              .08em .08em .03em #ffa500,
              .12em .12em .03em #ffff00,
              .16em .16em .03em #00ff00, .20em .20em .03em #00a3ff, .24em .24em .03em #ff00ff;
}
16.5% {
  box-shadow: .04em .04em  .03em #ffa500,
              .08em .08em  .03em #ffff00,
              .12em .12em  .03em #00ff00,
              .16em .16em  .03em #00a3ff,
              .20em .20em  .03em #ff00ff,
              .24em .24em  .03em #ff0000;
}
33% {
  box-shadow: .04em .04em  .03em #ffff00,
              .08em .08em  .03em #00ff00,
              .12em .12em  .03em #00a3ff,
              .16em .16em  .03em #ff00ff,
              .20em .20em  .03em #ff0000,
              .24em .24em  .03em #ffa500;
}
50% {
  box-shadow: .04em .04em  .03em #00ff00,
              .08em .08em  .03em #00a3ff,
              .12em .12em  .03em #ff00ff,
              .16em .16em  .03em #ff0000,
              .20em .20em  .03em #ffa500,
              .24em .24em  .03em #ffff00;
}
63.5% {
  box-shadow: .04em .04em  .03em #00a3ff,
              .08em .08em  .03em #ff00ff,
              .12em .12em  .03em #ff0000,
              .16em .16em  .03em #ffa500,
              .20em .20em  .03em #ffff00,
              .24em .24em  .03em #00ff00;
}
78% {
  box-shadow: .04em .04em  .03em #ff00ff,
              .08em .08em  .03em #ff0000,
              .12em .12em  .03em #ffa500,
              .16em .16em  .03em #ffff00,
              .20em .20em  .03em #00ff00,
              .24em .24em  .03em #00a3ff;
}
`

const MxSection = styled.section`
  position: relative;
  grid-template-columns: auto 1fr 8fr 1fr;
  min-width: 690px;
  text-align:center;
  font-size: 1em;
  padding: 4.2em 3.5em 0;
  overflow: hidden;
  flex-flow: row;
  align-items: baseline;
  background: ${ ({ theme }) => theme.background }; color: ${ ({ theme }) => theme.color }; transition-property: background, color; transition-duration: 0.25s; transition-delay: 0.2s;
  z-index:0;
  .wow {
    display:inline-block;
    background-image: linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1, #46eefa, #41dfff, #52cffe, #69bff8, #79b3f4, #8aa7ec, #9a9ae1, #aa8fd8, #ba83ca, #c777b9, #d16ba5);
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${ anim } 5s linear infinite;
  }
  .redgradient {
    background-image: linear-gradient(90deg, rgba(190,16,16,1) 0%, rgba(242,20,20,1) 16%, rgba(241,163,20,1) 39%, rgba(241,227,20,1) 46%, rgba(241,172,20,1) 57%, rgba(240,20,20,1) 77%, rgba(190,16,16,1) 100%);
  }
  .center {
    text-align: center;
  }
  .inline {
    padding-left:0.35em;
    align-self: center;
  }
  .bg-vid {
    position:absolute;
    left:0;
    right:0;
    top:-50%;
    width:100%;
    height: auto;
    z-index: -2;
  }
  .bg-darken {
    position:absolute;
    left:0;
    right:0;
    top:-50%;
    bottom: 0;
    width:100%;
    height: auto;
    z-index: -1;
    background-color:#000;
    opacity: 0.5;
  }

  h3 {
    text-shadow:3px 3px black;
  }
`

const MXJXNMarker = styled.h1`
  z-index:2;
  font-family: ${ ({ theme: { fonts } }) => fonts.headerFamily };
  font-weight:bold;
font-size: 5rem;
  color: blue;
  letter-spacing: 0.05em;
  min-width: 170px;
  position: relative;
  margin:0;
  text-align:center;
  align-self: flex-end;
  line-height: 1em;
`

const Tagline = styled.div`
  font-size: 1em;
  flex-grow: 8;
  padding 1rem 0;
`
const LilGuy = styled.div`
  font-size: 1.25em;
  flex-grow: 1;
`




const Hero = ({ className, theme }) => {

  return (
    <ThemeProvider theme={theme}>
      <MxSection className={className}>
        <video autoPlay muted loop className="bg-vid">
          <source src="/bg1.mp4" type="video/mp4" />
        </video>
        <div className="bg-darken"> </div>
        <MXJXNMarker className="wow">
          <div>MXJXN.xyz</div>
          <MagicCanvas />
        </MXJXNMarker>
        <h3>Web Developer, Artist and Musician</h3>
      </MxSection>
    </ThemeProvider>
  )
}

export default Hero;
