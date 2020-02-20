import React, { useState, useEffect } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import Fade from 'react-reveal/Fade'

const anim = keyframes`
  from { background-position: 0% 0; }
  to { background-position: 200% 0; }

`
const MXJXNMarker = styled.h1`
  font-family: ${ ({ theme: { fonts } }) => fonts.headerFamily };
  font-weight:bold;
  color: blue;
  font-size: 5em;
  letter-spacing: 0.05em;
  position: relative;
  margin:0;
  display: inline-block;
  margin:0 0.3em 0 0;
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
display: inline-flex;
flex-flow: row;
align-items: baseline;
flex-stretch: 3;
  .inline {
    vertical-align: middle;
    display:inline;
  }
`

const Line = styled.div`
  width:80vw;
  height:1em;
  background: linear-gradient(to left, #000000 0%, #c777b9 100%);
  border-radius: 8px;
`

const Word = styled.span`
  margin: 0px 01vw;
  ${ props => props.big? "font-size: 2em;": ""}
  ${ props => props.medium? "font-size: 1.5em;": ""}
`

const CascadeFade = ( { children,  cascadeDelay, fadeDuration, fadeDelay } ) => (
  <>
  {
    children.map((item, i) => (
      <span className="inline">
        <Fade
          key={`fade-${item}-${Math.floor(Math.random() * 1000)}`}
          duration={ fadeDuration }
          delay={ (i+1) * cascadeDelay + fadeDelay }>
          { item }
        </Fade>
      </span>
    ))
  }
  </>
)


const MxSection = styled.section`
  position: relative;
padding: 0 0.5em;
  height:100%;
  background: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.color };
  .wow {
    background-image: linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1, #46eefa, #41dfff, #52cffe, #69bff8, #79b3f4, #8aa7ec, #9a9ae1, #aa8fd8, #ba83ca, #c777b9, #d16ba5);
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${ anim } 5s linear infinite;
  }
`

const Hero = ({ className, theme, children, ...props }) => {

  return (
    <ThemeProvider theme={theme}>
      <MxSection className={className}>

        <MXJXNMarker className="wow">
          <Fade top duration={500} delay={400}>
            MXJXN.xyz
          </Fade>
        </MXJXNMarker>

        <Tagline>
          <CascadeFade
            fadeDuration={400}
            cascadeDelay={300}
            fadeDelay={400}>
            <Word>Developer</Word>
            <Word>Musician</Word>
            <Word>and Artist</Word>
            <Word medium className="wow">Max Jackson</Word>
          </CascadeFade>
        </Tagline>

        <Fade left duration={500} delay={1500}>
          <Line />
        </Fade>
      </MxSection>
    </ThemeProvider>
  )
}


export Hero
