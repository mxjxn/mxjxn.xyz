import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  padding: ${ props => props.narrow ? "0.2rem 1rem" : "1rem"};
  text-align:center;
  p {
    text-align:left;
  }
  @media screen and (min-width:970px) {
     text-align:left;
  }
`

const Grid = styled.div`
  display:block;
    h1, h2 {
      text-align:center;
      margin-bottom: 0.5rem;
    }
  @media screen and (min-width:970px) {
    display:grid;
    grid-template-columns: [l-gutter] 5rem [one] 1fr [two] 1fr [three] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten] 1fr [r-gutter] 5rem;

  }
`
const Full = styled(Div)`
  grid-column: one / span 10;
`

const LeftThird = styled(Div)`
  grid-column: one / span 3;
`
const LeftTwoThird = styled(Div)`
  grid-column: one / span 6;
`

const RightThird = styled(Div)`
  grid-column: seven / span 4;
`

const RightTwoThird = styled(Div)`
  grid-column: four / span 7;
`
const Left = styled(Div)`
  grid-column: one / span 4;
`
const Right = styled(Div)`
  grid-column: six / span 5;
`


const Rounded = styled.div`
  border-radius: ${ props => props.roundTop ? "5rem 5rem" : "0 0" } ${ props => props.roundBottom ? "5rem 5rem" :  "0 0"};
  padding-bottom: ${ props => props.narrow ? "0em" : "2em"};
`

const RedBox = styled(Rounded)`
  background: linear-gradient(173deg, #330000 0%, #690000 20%, #700000 80%, #8a0000 99%, #aa0000 100%);
`

const PurpleBox = styled(Rounded)`
  background: linear-gradient(180deg, rgba(216,136,251,1) 0%, rgba(178,57,234,1) 2%, rgba(100,27,158,1) 10%, rgba(32,1,77,1) 20%, rgba(0,0,0,0) 100%);
`
const OrangeBox = styled(Rounded)`
  background: linear-gradient(180deg, rgba(251,177,136,1) 0%, rgba(176,80,4,1) 2%, rgba(110,45,3,1) 12%, rgba(78,44,2,1) 100%);
`

const BlueBox = styled(Rounded)`
  background: linear-gradient(to top, #000000 0%, #070737 90%, #11118a 99%, #0000aa 100%);
`

const TealBox = styled(Rounded)`
  background: linear-gradient(to bottom, rgba(125,227,250,1) 0%, rgba(4,130,176,1) 2%, rgba(3,90,110,1) 12%, rgba(11,62,78,1) 100%);
`

const Flex = styled.div`
  display:flex;
  justify-content: space-evenly;
`

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & > * {
    padding: 1em;
  }
`

const CornerBox = styled.div`
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 1rem 0.3rem;
  background: white;
  background-opacity: 0.15;
  @media screen and (min-width:970px) {
  margin: 1rem 3rem;
  }

`
const DarkBox = styled(Div)`
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%);
  padding: 1rem;
  border-radius 0.5rem;
`

export {
  Grid,
  Full,
  LeftThird,
  LeftTwoThird,
  RightThird,
  RightTwoThird,
  Left, Right,
  RedBox, BlueBox, PurpleBox, OrangeBox, TealBox,
  Flex, FlexWrap,
  CornerBox,
  DarkBox
}
