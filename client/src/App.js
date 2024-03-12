import React, { lazy, Suspense } from 'react'

const ReturnGroups = lazy(() => import('./ReturnGroups'))

export function App(props) {
  return (
    <Suspense fallback={<p>Still loading</p>}>
      <ReturnGroups />
    </Suspense>
  )
}
