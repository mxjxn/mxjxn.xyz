import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const Item = styled.a`
  background: linear-gradient(to bottom, #333 0%, #090909 100%);
  margin: 0.5em 1em;
  padding: 0.05em 1em;
  height: 2.2em;
  font-size: 0.85em;
  display: inline-block;
  border-radius: 999px;
  color:#cce;
  transition: color 800ms linear ease-in-out;
  animation: ${rainbowShadow} 5s linear infinite;
  &:hover {
    color: #bbf;
  }
`

export { Item }
