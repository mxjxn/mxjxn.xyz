import React from 'react'
import { Hero } from '../components/Sections'

import themes from '../themes.js';

export default () => (
  <div className="content">
    <Hero theme={ themes.dark } />
  </div>
)
