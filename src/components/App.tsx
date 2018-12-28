import * as React from 'react'

import { macro, micro, us } from '../layer-data'
import { Layers } from './Layers'

export const App: React.SFC = () => (
  <>
    <h1>Layers of self-organizing emergent complexity</h1>
    <Layers list={micro} />
    <Layers list={us} />
    <Layers list={macro} />
  </>
)
