import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const DevSection = styled.section`
margin:0;
text-align:center
height:50%;
width: 100%;
background: black;
padding: 0 auto;
`

const Boxes = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin: 1em;
`

const Pane = styled.div`
  background: #444;
  border-radius: 8px;
  display: inline-block;
  width: 20vw;
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

const PaneContent = styled.div`
background:#333;
`

const DevPanel = () => {
  return (
    <DevSection>
      <Fade delay={2000}>
        <Boxes>
          <Pane>
            <h2>Front-end development</h2>
            <PaneContent>
              My manem mo omak
            </PaneContent>
          </Pane>

        </Boxes>
      </Fade>
    </DevSection>
  )
}

export default DevPanel

