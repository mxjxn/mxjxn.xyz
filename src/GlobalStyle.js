
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  scroll-behavior: smooth;
}


body {
}

body {
  font-family: 'Roboto Mono', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-weight: 300;
  font-size: calc(12px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(2em + (1.3 - 1.0) * ((100vw - 300px)/(1600 - 300)));
  margin: 0;
  padding: 0;
  background: #000;
  color: #fff;
}

a {
  text-decoration: none;
  color: #108db8;
  font-weight: bold;
}

img {
  max-width: 100%;
}

nav {
  width: 100%;
  background: #108db8;
}

nav a {
  color: white;
  padding: 1rem;
  display: inline-block;
}

.content {
  position:relative;
  padding: 0;
  margin: 0;
  height: 100vh;
}

@keyframes cycle {
  from { background-position: 0% 0; }
  to { background-position: 200% 0; }
}

.wow-pink{
  font-family: "Share Tech Mono";
  letter-spacing: 0.04em;
  margin: 1.5em 0 0.5em;
  background-image: linear-gradient(to right, #ccaabb 0%, #dd99aa 25%, #aa6699 50%,#dd99aa 75%, #ccaabb 100%);
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: cycle 6s linear infinite;
}
.wow-horiz{
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: cycle 6s linear infinite;
  background-image: linear-gradient(to right, rgba(252,176,69,1) 0%, rgba(253,75,41,1) 20%, rgba(233,72,63,1) 33%, rgba(131,58,180,1) 45%, rgba(225,36,64,1) 59%, rgba(253,29,29,1) 71%, rgba(252,176,69,1) 100%)
}
h1, h2, h3, h4 {
  font-family: "Permanent Marker";
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.8em;
}
h3 {
  font-size: 1.65em;
}
h4 {
  font-size: 1.35em;
}

p {

}
code, pre.prism-code {
  font-size: 0.75em;
  padding: 0.5em;
  background-image: linear-gradient(to right, #222 0%, #171717 20%, #111 80%, #171717 100%);
  line-height: 1.37em;
  letter-spacing: 0.04em;
  font-family: 'monospace';

}

ul {
  list-style-type: none;
}


`

