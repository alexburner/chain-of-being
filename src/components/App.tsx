import * as React from 'react'

import { macro, micro, us } from '../data'
import { Layers } from './Layers'

export const App: React.SFC = () => (
  <div className="app">
    <h1>Layers of self-organizing emergent complexity</h1>
    <Layers list={micro} />
    <Layers list={us} />
    <Layers list={macro} />
  </div>
)
