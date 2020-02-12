import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import { LoadingPage } from 'components/Loading'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {

  const loadingPage = (
    <LoadingPage>
      <h1 className="threedee"> loading</h1>
    </LoadingPage>
  )

  return (
    <Root>
      <React.Suspense fallback={loadingPage}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
    </Root>
  )
}

export default App
