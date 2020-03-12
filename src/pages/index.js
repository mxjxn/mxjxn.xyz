import React from 'react'
import { Section } from '../components/Section'
import Hero from '../components/Sections/Hero'
import Bio from '../components/Sections/Bio'
import DevEntry from '../components/Sections/DevEntry.mdx'
import Examples from '../components/Sections/Examples'
import Footer from '../components/Sections/Footer'
import themes from '../themes.js';

export default () => (
  <div className="content">
    <Hero theme={ themes.dark } />
    <DevEntry/>
    <Examples/>
    <Footer/>
  </div>
)
