import React from 'react'
import styled from 'styled-components'

import { Grid, Full, DarkBox, Flex } from '../Containers'

const CenterFull = styled(Full)`
  text-align: center;
`

const Footer = () => {
    return (
        <Grid>
          <CenterFull>
            <DarkBox>
              Created by Max Jackson using <a href="https://nextjs.org">Next.js</a> and <a href="https://styled-components.com">styled-components</a>. Source code on <a href="https://github.com/mxjxn/mxjxn.xyz">Github</a>.
            </DarkBox>
          </CenterFull>
        </Grid>
    )
}

export { Footer }
