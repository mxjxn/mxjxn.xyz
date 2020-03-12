import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CarouselBody = styled.div`
overflow: hidden;
height: 2em;

& > * {
  transition-property: opacity, transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in;

  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  transform: translate( 0, -50%);
}

& > .before {
  opacity: 0;
  transform: translate( 0, -50%);
}

& > .before {
  opacity: 0;
  transform: translate( 0, 50%);
}
`

const Rotator = ({ children, delay=300, selected=0, className='' }) => {

  const childArr = React.Children.toArray(children);

  const [state, setState] = useState({
    selectedItem: selected,
  })

  useEffect(() => {

    return function effectCleanup() { clearInterval(interval) }

  });

  return (
    <CarouselBody className={className}>
      { childArr[state.selectedItem] }
    </CarouselBody>
  )
}

export default Rotator;
