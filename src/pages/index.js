import React from 'react'
import { Section } from '../components/Section'
import Hero from '../components/Sections/Hero'
import Bio from '../components/Sections/Bio'
import DevEntry from '../components/Sections/DevEntry.mdx'
import Examples from '../components/Sections/Examples'
import Footer from '../components/Sections/Footer'
import themes from '../themes.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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
export default () => (
  <>
    <GlobalStyle />
    <div className="content">
      <Hero theme={ themes.dark } />
      <DevEntry/>
      <Examples/>
      <Footer/>
    </div>
  </>
)
