
import { createGlobalStyle, keyframes } from 'styled-components';

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

export { rainbowShadow };

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
  font-size: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
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

font-size: 0.85em;
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
  list-style-type: line ;
}


`

