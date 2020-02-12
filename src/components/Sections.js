import React from 'react'
import styled, { keyframes } from 'styled-components'
const MxSection = styled.section`
  position: relative;
  width: 100%;
  height:100%;
  margin:0;
  padding: 5em;
  &.dark {
    background-color: #070707;
  }
`

const anim = keyframes`
  from { background-position: 0% 0; }
  to { background-position: 200% 0; }

`
const Text = styled.div`
  flex-grow: ${ props => props.double ? 2 : 1 };
  .wow {
    font-weight:bold;
    color: blue;
    background-image: linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1, #46eefa, #41dfff, #52cffe, #69bff8, #79b3f4, #8aa7ec, #9a9ae1, #aa8fd8, #ba83ca, #c777b9, #d16ba5);
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    animation: ${ anim } 8s linear infinite;
  }
  .wow.fast {
    animation-duration: 1s;
  }
`

const Hero = ({ className, children, ...props }) => {

  return (
    <MxSection className="dark">
      <Text>
      <div className="wow">MXJXN</div>
      </Text>
    </MxSection>
  )
}

export { Hero }

