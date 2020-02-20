import React from 'react'
import Hero from '../components/Sections/Hero'
import DevPanel from '../components/Sections/DevPanel'

import themes from '../themes.js';

export default () => (
  <div className="content">
    <Hero theme={ themes.dark } />
    <DevPanel />
  </div>
)
