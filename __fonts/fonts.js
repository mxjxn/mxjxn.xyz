import { createGlobalStyle } from 'styled-components'

import PermanentMarker from './PermanentMarker-Regular.ttf'
import RobotoMono from './RobotoMono.ttf'
import ShareTechMono from './ShareTechMono.ttf'

export default createGlobalStyle`
@font-face {
  font-family: 'Permanent Marker';
  src: local('Permanent Marker'), local('PermanentMarker'),
  url(${PermanentMarker}) format('truetype');
}
@font-face {
  font-family: 'Roboto Mono';
  src: local('Roboto Mono'), local('RobotoMono'),
  url(${RobotoMono}) format('truetype');
}
@font-face {
  font-family: 'Share Tech Mono';
  src: local('Share Tech Mono'), local('ShareTechMono'),
  url(${ShareTechMono}) format('truetype');
}
`
