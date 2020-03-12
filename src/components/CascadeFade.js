import React from 'react';
import Fade from 'react-reveal/Fade'

const CascadeFade = ( { children,  cascadeDelay=400, fadeDuration=300, fadeDelay=0 } ) => (
    <>
    {
      children.map((item, i) => (
          <Fade
        className="inline"
        duration={ fadeDuration }
        delay={ (i+1) * cascadeDelay + fadeDelay }>
          { item }
        </Fade>
      ))
    }
  </>
)

export default CascadeFade;
