import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Section from 'containers/Section'

import CodeBlock from './components/CodeBlock'
import { FireH1, FireH2, FireH3 } from './components/Fire'
import { LoadingPage } from 'components/Loading'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChartLine, faHammer} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faChartLine, faHammer)
// import './app.css'

import './styles.css'


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])


const markdownComponents = {
  wrapper: Section,
  code: CodeBlock,
  h1: FireH1,
  h2: FireH2,
  h3: FireH3
}

function App() {

  const loadingPage = (
    <LoadingPage>
      <h1 className="threedee"> loading</h1>
    </LoadingPage>
  )

  return (
    <Root>
      <React.Suspense fallback={loadingPage}>
      <MDXProvider components={markdownComponents}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </MDXProvider>
      </React.Suspense>
    </Root>
  )
}

export default App
