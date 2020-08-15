import React from 'react'
import Fade from 'react-reveal/Fade'
import styled, {keyframes} from 'styled-components'
import DevEntry from './DevEntry.mdx'
import Flex from '../../containers/Flex'


const DevSection = styled.section`
  margin:0 3.5em;
  text-align:center
  height:50%;
  background-image: linear-gradient(180deg, #bbbbbb 0%, #cccccc 5%, #dddddd 95%, #eeeeee 100%);
  color: #111;
  border: 0.2rem solid #222;


  border-radius: 1em;
  ul {
    list-style-type: circle;
    list-style-position: inside;
  }
  li {
    background: linear-gradient(45deg, #ff0000 0%, #770000 100%);
  }
  li li {
    background: linear-gradient(45deg, #990000 0%, #550000 100%);
  }
`

const Pane = styled.div`
  margin:1rem;
  font-size: 0.8em;
  min-width: 35.2%;
  h2, h3, h4 {
    margin: 0.01em 0;
    line-height: 1em;
    background-image: linear-gradient(10deg, #999999 0%, #bbbbbb 100%);
    border-radius: 5em;
    color: #111;
  }
  & > * {
    padding: 0.25em 1em;
  }
`

const Btn = styled.button`
transition-property: box-shadow border;
transition-duration: 0.2s;
border:1px solid black;
position:relative;
top: 0px;
&:hover {
  border: 1px solid #999;
  top: -2px;
  box-shadow: 0px 4px #666;
}
`

const DevPanel = () => {
  return (
    <Fade delay={1000}>
      <DevSection>
        <Flex>
          <Pane>
            <DevEntry />
          </Pane>
        </Flex>
      </DevSection>
      </Fade>
  )
}

export default DevPanel

