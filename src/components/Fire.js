import React from 'react'
import styled, { keyframes } from 'styled-components'

const anim = keyframes`
  from { background-position: 0% 0; }
  to { background-position: 200% 0; }
`

const FireH1 = styled.h1`
  font-size: 1.76em;
  font-weight:999;
  background-size: 200% auto;
  margin:${ props => props.margin ? props.margin : '0px'};
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${ anim } 5s linear infinite;
  background-image: linear-gradient(90deg, rgba(190,16,16,1) 0%, rgba(242,20,20,1) 16%, rgba(241,163,20,1) 39%, rgba(241,227,20,1) 46%, rgba(241,172,20,1) 57%, rgba(240,20,20,1) 77%, rgba(190,16,16,1) 100%);
`

const FireH2 = styled.h2`
  font-family: "Permanent Marker";
  font-size: 1.66em;
  display: inline-block;
  font-weight:999;
  margin:${ props => props.margin ? props.margin : '0px'};
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${ anim } 5s linear infinite;
  background-image: linear-gradient(90deg, rgba(190,16,16,1) 0%, rgba(242,20,20,1) 16%, rgba(241,163,20,1) 39%, rgba(241,227,20,1) 46%, rgba(241,172,20,1) 57%, rgba(240,20,20,1) 77%, rgba(190,16,16,1) 100%);
`

const FireH3 = styled.h2`
  font-size: 1.26em;
  display: ${ props => props.block ? 'block' : 'inline-block'};
  @media (max-width: 768px ) {
    display: block;
  }

  margin:${ props => props.margin ? props.margin : '0px'};
  font-weight:999;
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  className='two';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${ anim } 5s linear infinite;
${ props => props.two ? 'background-image: linear-gradient(90deg, rgba(190,16,16,1) 0%, rgba(242,20,20,1) 16%, rgba(241,163,20,1) 39%, rgba(241,227,20,1) 46%, rgba(241,172,20,1) 57%, rgba(240,20,20,1) 77%, rgba(190,16,16,1) 100%); ' :
'background-image: linear-gradient(to right, rgba(252,176,69,1) 0%, rgba(253,75,41,1) 20%, rgba(233,72,63,1) 33%, rgba(208,69,92,1) 40%, rgba(199,76,228,1) 45%, rgba(253,80,43,1) 48%, rgba(225,36,64,1) 59%, rgba(253,29,29,1) 71%, rgba(252,176,69,1) 100%);'}
`
export { FireH1, FireH2, FireH3 }


