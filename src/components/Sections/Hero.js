import React, { useState, useEffect } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import Fade from 'react-reveal/Fade'

const anim = keyframes`
  from { background-position: 0% 0; }
  to { background-position: 200% 0; }
`

const MxSection = styled.section`
  position: relative;
text-align:center;
  font-size: 1.7em;
  padding: 1em 3.5em;
  overflow: hidden;
  background: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.color };
  transition-property: background, color;
  transition-duration: 0.25s;
  transition-delay: 0.2s;
  .wow {
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
`

const MXJXNMarker = styled.h1`
z-index:2;
  font-family: ${ ({ theme: { fonts } }) => fonts.headerFamily };
  font-weight:bold;
  color: blue;
  font-size: 5em;
  letter-spacing: 0.05em;
  position: relative;
  margin:0;
padding: 1rem 0;
`

const MXJXNLead = styled.div`
  font-family: ${ ({ theme: { fonts } }) => fonts.baseFamily };
  position:relative;
  padding:4em;
  border-radius 16px 100px;
  background: linear-gradient(-40deg, #222 0%, #555 100%);
  margin: 0.5em;
  display: inline-block;
`

const Tagline = styled.div`
  position:relative;
  padding: 0 0 0.71em;
  display: inline-flex;
  flex-flow: row;
  align-items: baseline;
  flex-stretch: 3;
  .inline {
    vertical-align: middle;
    display:inline;
  }
`

const BGLine = styled.div`
  padding: 14.3em 0;
z-index: -10;
margin: -14em;
font-size:1.1em;
${ props => props.fontpx ? ("font-size: " + props.fontpx + "px;") : "" }
  transform: rotate(${ props => props.rotate }deg);
  background: linear-gradient(to left, #3777b9 05%, #000000 50%, #c64400 95%);
`

const Word = styled.span`
  z-index:10;
  margin:0 0.4em 0 0;
  ${ props => props.block ? "margin-right: 0; margin-bottom: 0.2em;" : "" }
  font-family: ${ props => props.fancy ? props.theme.fonts.headerFamily : props.theme.fonts.baseFamily};
  letter-spacing: 0.025em;
  font-size: 1.3em;
  ${ props => props.big? "font-size: 5em;": ""}
  ${ props => props.medium? "font-size: 2.9em;": ""}
`

const CascadeFade = ( { children,  cascadeDelay, fadeDuration, fadeDelay } ) => (
  <>
  {
    children.map((item, i) => (
      <span
        key={`fade-${item}-${Math.floor(Math.random() * 1000)}`}
        className="inline">
        <Fade
          duration={ fadeDuration }
          delay={ (i+1) * cascadeDelay + fadeDelay }>
          { item }
        </Fade>
      </span>
    ))
  }
  </>
)



const Hero = ({ className, theme, children, ...props }) => {

  return (
    <ThemeProvider theme={theme}>
      <MxSection className={className}>
        <Word>
          <Fade duration={300}>
            Hi, I'm
          </Fade>
        </Word>
        <MXJXNMarker className="wow">
            <Fade top duration={500} delay={600}>
              MXJXN
            </Fade>
        </MXJXNMarker>
        <Fade duration={300} delay={1000}>
          <BGLine fontpx={50} rotate={3.4}>which is shorthand for</BGLine>
        </Fade>
        <div className="bottom">
          <Fade delay={1400} duration={200}>
            <Word fancy medium block className="wow redgradient">Max Jackson.</Word>
          </Fade>
        </div>
      </MxSection>
    </ThemeProvider>
  )
}


export default Hero;
